const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div>
          <h1 className="font-semibold text-foreground">Classifier</h1>
          <p className="text-xs text-muted-foreground">Powered by TensorFlow</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
