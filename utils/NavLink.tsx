
import Link from 'next/link';
import { motion } from 'framer-motion';

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const navLinkClass = "relative px-2 py-1 hover:text-gray-900 transition";

const underlineVariants = {
  initial: { width: 0 },
  hover: { width: "100%" },
};

const NavLink = ({ href, className = "", children }: NavLinkProps) => {
  return (
    <Link href={href} className={`${navLinkClass} ${className}`}>
      <motion.span
        className="relative inline-block"
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        {children}
        <motion.span
          className="absolute left-0 -bottom-0.5 h-0.5 bg-red-500"
          variants={underlineVariants}
          transition={{ duration: 0.3 }}
          style={{ display: "block" }}
        />
      </motion.span>
    </Link>
  );
};

export default NavLink;