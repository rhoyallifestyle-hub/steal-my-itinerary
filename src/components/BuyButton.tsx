type BuyButtonProps = {
  link: string;
  label: string;
};

export default function BuyButton({ link, label }: BuyButtonProps) {
  return (
    <a
      className="gumroad-button bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
      href={link}
      data-gumroad-overlay="true"
    >
      {label}
    </a>
  );
}
