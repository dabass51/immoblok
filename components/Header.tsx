import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

// Icon Components Type Definition
type SVGIconProps = React.SVGProps<SVGSVGElement>;

export const Header: FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white dark:bg-black">
            <div className="flex items-center space-x-4">
                <img
                    src="/immocloud-b-retina.png.webp"
                    alt="Logo"
                    width="150"
                    height="34"
                    style={{ aspectRatio: "420/96", objectFit: "cover" }}
                />
                <nav className="hidden space-x-6 md:flex">
                    {navItems.map((item) => (
                        <NavItem key={item.label} href={item.href} label={item.label} />
                    ))}
                </nav>
            </div>

            <div className="hidden md:block items-center space-x-4">
                <Link href="#" className="text-lg text-muted-foreground hover:underline">
                    Login
                </Link>
                <Button className="text-lg" variant="default">
                    Jetzt starten
                </Button>
                <ModeToggle />
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium mb-4">
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.href} className="flex items-center gap-4 px-2.5 text-primary" prefetch={false}>
                                <item.icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                        ))}
                        <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                            Login
                        </Link>
                    </nav>
                    <div className="md:hidden block">
                        <Button className="text-lg w-full mb-4" variant="default">
                            Jetzt starten
                        </Button>
                        <ModeToggle />
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
};

// Navigation Item Component
interface NavItemProps {
    href: string;
    label: string;
}

const NavItem: FC<NavItemProps> = ({ href, label }) => (
    <div className="group relative">
        <Link href={href} className="block text-lg text-muted-foreground">
            {label}
        </Link>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </div>
);

// Icons
const HomeIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const PuzzleIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
);

const BriefcaseIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
);

const DollarSignIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

const LockIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const BookIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
);

const MenuIcon: FC<SVGIconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

// Navigation Items List with Icons
const navItems = [
    { href: "#", label: "Startseite", icon: HomeIcon },
    { href: "#", label: "Funtionen", icon: PuzzleIcon },
    { href: "#", label: "Service", icon: BriefcaseIcon },
    { href: "#", label: "Sicherheit", icon: LockIcon },
    { href: "#", label: "Magazin", icon: BookIcon },
    { href: "/pricing", label: "Tarife", icon: DollarSignIcon }
];


export default Header;
