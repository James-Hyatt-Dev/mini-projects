import Link from "next/link"

function Header() {
  return (
    <div className="h-12 w-screen bg-slate-800 text-slate-300 items-center flex justify-center space-x-6">
        <Link href='/'>Home</Link>
        <Link href='/email-subscribe'>Email Subscribe</Link>
        <Link href='/pricing-cards'>Pricing Cards</Link>
        <Link href='/product-modal'>Product Modal</Link>
        <Link href='/image-gallery'>Image Gallery</Link>
        <Link href='/login-modal'>Login Modal</Link>
    </div>
  )
}

export default Header