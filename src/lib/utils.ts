export function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  
  return new Intl.DateTimeFormat('en-US', {
    month: 'long', 
    day: 'numeric', 
    year: 'numeric'
  }).format(date);
} 