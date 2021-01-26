export const DAYS_IN_YEAR = 300

export interface IEntity {
  id: number
}

export interface ISeason extends IEntity {
  name: string
}

export interface IMonth extends IEntity {
  name: string
  length: number
  order: number
  season: ISeason
}

export enum EEventType {
  Holiday
}

export interface IEvent extends IEntity {
  name: string
  description: string
  month: IMonth
  dayOfMonth: number
  type: EEventType
}

export const SEASONS: ISeason[] = [
  {
    id: 1,
    name: 'Spring'
  },
  {
    id: 2,
    name: 'Summer'
  },
  {
    id: 3,
    name: 'Fall'
  },
  {
    id: 4,
    name: 'Winter'
  }
]
export const [seasonSpring, seasonSummer, seasonFall, seasonWinter] = SEASONS
export const getSeasonById = (id: number): ISeason | undefined =>
  SEASONS.find((season) => season.id === id)

export const MONTHS: IMonth[] = [
  {
    id: 1,
    name: 'Horisol',
    length: 29,
    order: 10,
    season: seasonSpring
  },
  {
    id: 2,
    name: 'Undilthar',
    length: 30,
    order: 20,
    season: seasonSpring
  },
  {
    id: 3,
    name: 'Mirthal',
    length: 30,
    order: 30,
    season: seasonSpring
  },
  {
    id: 4,
    name: 'Mistren',
    length: 31,
    order: 40,
    season: seasonSummer
  },
  {
    id: 5,
    name: 'Sydensheer',
    length: 27,
    order: 50,
    season: seasonSummer
  },
  {
    id: 6,
    name: 'Dualhearth',
    length: 32,
    order: 60,
    season: seasonFall
  },
  {
    id: 7,
    name: 'Eiwth',
    length: 30,
    order: 70,
    season: seasonFall
  },
  {
    id: 8,
    name: 'Fessuran',
    length: 30,
    order: 80,
    season: seasonWinter
  },
  {
    id: 9,
    name: 'Jarketh',
    length: 29,
    order: 90,
    season: seasonWinter
  },
  {
    id: 10,
    name: 'Duscar',
    length: 32,
    order: 100,
    season: seasonWinter
  }
]
export const [
  monthHorisol,
  monthUndilthar,
  monthMirthal,
  monthMistren,
  monthSydensheer,
  monthDualhearth,
  monthEiwth,
  monthFessuran,
  monthJarketh,
  monthDuscar
] = MONTHS
export const getMonthById = (id: number): IMonth | undefined =>
  MONTHS.find((month) => month.id === id)
export const getOrderedMonths = (): IMonth[] =>
  MONTHS.sort((monthA, monthB) => (monthA.order < monthB.order ? -1 : 1))
export const getMonthByNth = (nth: number): IMonth | undefined =>
  getOrderedMonths()[nth + 1]

export const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'New Dawn',
    description: '',
    month: monthHorisol,
    dayOfMonth: 1,
    type: EEventType.Holiday
  },
  {
    id: 2,
    name: 'New Harvest',
    description: '',
    month: monthMirthal,
    dayOfMonth: 5,
    type: EEventType.Holiday
  },
  {
    id: 3,
    name: "Hunter's Cup",
    description: '',
    month: monthMirthal,
    dayOfMonth: 28,
    type: EEventType.Holiday
  },
  {
    id: 4,
    name: "Magician's Zenith",
    description: '',
    month: monthSydensheer,
    dayOfMonth: 17,
    type: EEventType.Holiday
  },
  {
    id: 5,
    name: 'Artisanfaire',
    description: '',
    month: monthSydensheer,
    dayOfMonth: 3,
    type: EEventType.Holiday
  },
  {
    id: 6,
    name: 'Day of Giving',
    description: '',
    month: monthSydensheer,
    dayOfMonth: 27,
    type: EEventType.Holiday
  },
  {
    id: 7,
    name: "Bard's Revelery",
    description: '',
    month: monthDualhearth,
    dayOfMonth: 10,
    type: EEventType.Holiday
  },
  {
    id: 8,
    name: 'High Summer',
    description: '',
    month: monthDualhearth,
    dayOfMonth: 20,
    type: EEventType.Holiday
  },
  {
    id: 9,
    name: 'Ember Fall',
    description: '',
    month: monthEiwth,
    dayOfMonth: 5,
    type: EEventType.Holiday
  },
  {
    id: 10,
    name: 'Harvest Close',
    description: '',
    month: monthFessuran,
    dayOfMonth: 5,
    type: EEventType.Holiday
  }
]
export const getEventById = (id: number): IEvent | undefined =>
  EVENTS.find((event) => event.id === id)
export const getEventsByMonth = (month: IMonth): IEvent[] =>
  EVENTS.map((event) => event.month === month)
export const getEventByName = (name: string): IEvent | undefined =>
  EVENTS.find((event) => event.name === name)
