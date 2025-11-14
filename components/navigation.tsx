import CustomButton from './button'

export default function Navigation() {
  const isScrolled = false;
  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-background/80 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="">11</div>
      <CustomButton />
    </nav>
  );
}
