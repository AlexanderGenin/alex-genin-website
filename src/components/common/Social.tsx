import type { ReactElement, FC, CSSProperties } from "react";

type Props = {
  url: string;
  icon: ReactElement;
  style?: CSSProperties;
};

const Social: FC<Props> = ({ url, icon, style }) => {
  return (
    <a
      className="social-networks__link"
      href={url}
      target="_blank"
      rel="noreferrer"
      style={style}
    >
      {icon}
    </a>
  );
};

export default Social;
