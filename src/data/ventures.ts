export type VentureStatus = 'live' | 'building' | 'incoming' | 'classified';

export interface Venture {
  id: string;
  name: string;
  domain: string;
  summary: string;
  status: VentureStatus;
  href?: string;
  tags?: string[];
}

/**
 * Drop real ventures in here. Each entry renders as a card in the grid.
 * Future work: promote entries to their own MDX pages under src/pages/ventures/.
 */
export const ventures: Venture[] = [
  {
    id: 'div-001',
    name: 'Division 001',
    domain: 'CLASSIFIED',
    summary: 'First operational unit. Details upcoming.',
    status: 'building',
    tags: ['software'],
  },
  {
    id: 'div-002',
    name: 'Division 002',
    domain: 'CLASSIFIED',
    summary: 'Prototype under active development in the workshop.',
    status: 'incoming',
    tags: ['hardware'],
  },
  {
    id: 'div-003',
    name: 'Division 003',
    domain: 'CLASSIFIED',
    summary: 'Concept staged for the pipeline. Specification pending.',
    status: 'classified',
    tags: ['research'],
  },
];
