import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { mobileNav } from "@/constants/profile";

interface MobileMenuProps {
  open: boolean;
  onNavigate: () => void;
}

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          id="mobile-menu"
          className="absolute inset-x-0 top-[55px] flex flex-col border-b border-[#5d202a] bg-[#100c0c] px-5 pb-5 pt-[10px] min-[601px]:hidden"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
        >
          {mobileNav.map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={onNavigate}
              className="flex min-h-[54px] items-center gap-[18px] border-b border-line text-[18px]"
            >
              <span className="text-[10px] text-accent">0{i + 1}</span>
              {label}
              <ArrowUpRight size={18} className="ml-auto text-muted" />
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
