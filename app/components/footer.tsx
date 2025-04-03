import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-app-purple text-base-300 dark:text-app-white text-xl rounded font-handlee">
      <div>
        <p>Nimai Charan © 2023 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
