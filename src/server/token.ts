import axios from "axios"
import { db } from "./db"

export async function generateAccessToken(){
  const token = await db.accessToken.findFirst()
  if (!token){
    axios.post(process.env.IGDB_URL!, {
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: "client_credentials"
    }).then(response => {
      console.log("Success: ", response.data)
      const accessToken = response.data.access_token;
      const expiresIn = response.data.expires_in;
      const token_type = response.data.token_type
      storeAccessToken(accessToken, expiresIn, token_type)
    }).catch(error => {
      console.error("Error", error)
    })
  } else {
    console.log("CANNOT GENERATE, TOKEN ALREADY EXISTS")
  }
}

async function storeAccessToken(access_token: string, expiresIn: number, token_type: string){
  const token = await db.accessToken.findFirst()
  if(token){
    console.log("THERE EXISTS A TOKEN: ", token)
    return
  } else {
    const expireDate = addTimeToDate(expiresIn)
    const makeToken = await db.accessToken.create({
      data: {
        token: access_token,
        expiresOn: expireDate,
        type: token_type,
      }
    })
    console.log("TOKEN STORED: ", makeToken)
  }
}

export async function useAccessToken(){
  const token = await db.accessToken.findFirst()
  if (token){
    const curTimeSeconds = Math.floor(new Date().getTime() / 1000)
    const expired = token?.expiresOn.getTime() < curTimeSeconds;
    console.log("expired:", expired)
    if(!expired){
      console.log("NOT EXPIRED")
      return token;
    } else {
      console.log("EXPIRED!")
      await db.accessToken.deleteMany()
      generateAccessToken()
    }
  }
}

function addTimeToDate(expriresIn: number){
  const curTime = new Date().getTime() / 1000
  const newTime = curTime + expriresIn
  const newDate = new Date(newTime * 1000)
  return newDate
}