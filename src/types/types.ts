
export type user = {
  id: string,
  name: string | null,
  userName?: string | null,
  email: string | null,
  emailVerified?: Date | null,
  image: string | null,
  lists?: list[],
}

export type list = {
  id: number,
  name: string,
  createdAt: number,
  updatedAt: number,
  Owner: user,
  games?: game[],
}

export type game = {
  id: number,
  name: string,
  follows?: number,
  cover?: cover, 
  summary?: string,
  first_release_date?: string,
  release_dates?: string,
  release_month?: number,
  release_human?: string,
  aggregated_rating?: number,
  rating?: number,
  artworks?: artwork[],
  screenshots?: screenshot[],
  storyline?: string,
  themes?: string[],
  similar_games?: string[],
  involved_companies?: involved_companies[],
  platforms?: platform[],
  genres?: genre[],
  categories?: string[],
  game_modes?: game_mode[],
}

type cover = {
  id: number,
  url: string,
}

type genre = {
  id: number,
  name: string,
}

type artwork = {
  id: number,
  url: string,
}

type screenshot = {
  id: number,
  url: string,
}

type platform = {
  id: number,
  name: string,
}

type game_mode = {
  id: number,
  name: string,
}

type involved_companies = {
  id: number,
  company: {
    id: number,
    name: string,
  }
}