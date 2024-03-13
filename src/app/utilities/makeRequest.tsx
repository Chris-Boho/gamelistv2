import axios from "axios";
import { useAccessToken } from "~/server/token";
import getCovers from "./getCovers";
import { env } from "process";

type Props = {
  endpoint: string;
  requestBody: string;
  getCover: boolean;
};

export default async function makeRequest({
  endpoint,
  requestBody,
  getCover,
}: Props) {
  const URL = `https://api.igdb.com/v4${endpoint}`;

  const authorization = await useAccessToken();

  const headers = {
    "Client-ID": env.TWITCH_CLIENT_ID,
    Authorization: `Bearer ${authorization?.token}`,
    Accept: "application/json",
  };

  let result;

  const resp = await axios.post(URL, requestBody, { headers });
  if (getCover) {
    result = getCovers({ games: resp.data });
  } else {
    result = resp.data;
  }

  return result;
}
