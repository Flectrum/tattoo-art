type OverlayProps = {
  onClick: () => void;
};

export const Overlay = ({ onClick }: OverlayProps) => {
  return <div className="fixed inset-0 z-40 bg-black/60" onClick={onClick} />;
};
