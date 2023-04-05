// Internal Imports
import Link from "next/link";
import Image from "next/image";
// Images
import Logo from "/public/images/BUNA-LOGO-black.png";
import LogoW from "/public/images/BUNA-LOGO-white.png";

const BrandSection = ({ trigger }) => {
  return (
    <div style={{ backgroundColor: '#000' , padding: '5px'}}>
      <Link href="/" style={{ display: "flex" }}>
        <span style={{ display:"flex" }}>
          <Image
            src={LogoW}
            alt="Buna Logo"
            width={180}
            height={100}
            priority
            style={{ objectFit: 'contain'}}
          />
        </span>
      </Link>
    </div>
  );
};

export default BrandSection;