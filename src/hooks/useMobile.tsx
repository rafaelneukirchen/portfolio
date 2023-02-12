export default function isMobile() {
  if (window.screen.width > 768) {
    return false;
  }
  return true;
}
