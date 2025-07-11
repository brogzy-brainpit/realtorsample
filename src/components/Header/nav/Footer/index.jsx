import Link from 'next/link';

export default function index() {
  return (
    <div className={` flex justify-between font-normal text-para  bg-slate-500 w-full text-brand-text `}>
        <Link href={"/"}>Awwwards</Link>
        <Link href={"/"}>Instagram</Link>
        <Link href={"/"}>Dribble</Link>
        <Link href={"/"}>LinkedIn</Link>
    </div>
  )
}
