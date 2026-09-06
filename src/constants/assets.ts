/**
 * KÓRADEON — curated visual asset library.
 * High-quality editorial photography (Pexels) used across the site.
 * Centralising image URLs keeps art direction consistent.
 */

const px = (id: number, w = 1920) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const IMAGES = {
  /* Cities / places */
  cityDusk: px(260931),
  cityHarbour: px(1050940),
  cityNight: px(933054),

  /* Kavora — agriculture & food */
  kavora: px(2886937),
  farmer: px(1647999),

  /* Ozura — hospitality */
  ozura: px(261102),
  ozuraBeach: px(189296),
  ozuraTropical: px(258154),
  luxuryPool: px(1743229),

  /* Rumara — real estate & urban development */
  rumara: px(323780),
  buildingWhite: px(439391),
  buildingModern: px(830891),
  interior: px(3861964),

  /* Arcovia — infrastructure & engineering */
  arcovia: px(1672002),
  arcoviaBridge: px(1566837),

  /* Innovation & technology */
  innovationTech: px(373543),
  techBoard: px(355948),
  drone: px(1148820),
  energy: px(356036),

  /* People, leadership, operations */
  peopleTeam: px(3184291),
  peopleMeeting: px(3183183),
  office: px(1181406),
  meetingBoard: px(3184418),

  /* Editorial / news */
  corporateSkyline: px(933054),
  economy: px(460716),
  marketData: px(4427630),
  boardroom: px(7743317),
} as const

export type ImageKey = keyof typeof IMAGES

/** Small helper to render a Pexels image at a target width without bloating markup. */
export const pexels = (id: number, w = 1400) => px(id, w)