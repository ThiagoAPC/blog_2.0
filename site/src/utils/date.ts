const MONTHS_PT: string[] = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(date: Date): string {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

export interface YearMonth {
  year: number;
  month: number;
  key: string;
  label: string;
}

export function getYearMonth(date: Date): YearMonth {
  const year = date.getFullYear();
  const month = date.getMonth();
  return {
    year,
    month,
    key: `${year}-${String(month + 1).padStart(2, '0')}`,
    label: `${year} — ${MONTHS_PT[month]}`,
  };
}

export function groupByYearMonth<T extends { data: { pubDate: Date } }>(
  items: T[]
): { label: string; key: string; posts: T[] }[] {
  const map = new Map<string, { label: string; key: string; posts: T[] }>();

  for (const item of items) {
    const ym = getYearMonth(item.data.pubDate);
    if (!map.has(ym.key)) {
      map.set(ym.key, { label: ym.label, key: ym.key, posts: [] });
    }
    map.get(ym.key)!.posts.push(item);
  }

  // Sort groups newest-first
  return [...map.values()].sort((a, b) => b.key.localeCompare(a.key));
}
