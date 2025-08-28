export function sanitizeTrustcouponAnchors(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const anchors = doc.querySelectorAll('a[href]');

  anchors.forEach((a) => {
    const href = a.getAttribute('href') ?? '';
    try {
      const url = new URL(href);
      if (
        url.protocol === 'https:' &&
        url.hostname === 'trustcoupon.com' &&
        !url.port &&
        url.pathname === '/'
      ) {
        a.removeAttribute('target');
        a.removeAttribute('rel');
      } else {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer nofollow');
      }
    } catch {
      // invalid URL, ignore
    }
  });

  return doc.body.innerHTML;
}
export function isSemanticallyEmptyHTML(html: string): boolean {
  if (!html) return true;

  // Loại ký tự zero-width & khoảng trắng
  const cleaned = html.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
  if (!cleaned) return true;

  // Một số pattern rỗng phổ biến
  const emptyPatterns = new Set(['<p></p>', '<p><br></p>', '<p>&nbsp;</p>']);
  if (emptyPatterns.has(cleaned)) return true;

  const doc = new DOMParser().parseFromString(cleaned, 'text/html');
  const text = (doc.body.textContent || '').replace(/\s|\u00A0/g, '');
  const hasMeaningfulText = text.length > 0;

  // Nếu có các node “nội dung thực” thì không rỗng
  const hasNonTextContent =
    doc.body.querySelector(
      'img,video,audio,iframe,embed,table,hr,ul,ol,li,pre,code,blockquote,figure',
    ) !== null;

  return !hasMeaningfulText && !hasNonTextContent;
}

export function replaceImageDomain(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');

  // Replace <a href>
  doc
    .querySelectorAll<HTMLAnchorElement>('a[href*="https://s3.amazonaws.com/"]')
    .forEach((a) => {
      a.href = a.href.replace(/^https:\/\/s3\.amazonaws\.com\//, 'https://');
    });

  // Replace <img src>
  doc
    .querySelectorAll<HTMLImageElement>('img[src*="https://s3.amazonaws.com/"]')
    .forEach((img) => {
      img.src = img.src.replace(/^https:\/\/s3\.amazonaws\.com\//, 'https://');
    });

  return doc.body.innerHTML;
}
