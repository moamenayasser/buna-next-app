// Internal Imports
import Link from "next/link";
import Image from "next/image";
// Images
import Logo from "/public/images/logo.png";

const BrandSection = () => {
  return (
    <div>
      <Link href="/" style={{ display: "flex" }}>
        <Image src={Logo} alt="Taam Logo" width={200} height={74} priority />
      </Link>
    </div>
  );
};

export default BrandSection;
