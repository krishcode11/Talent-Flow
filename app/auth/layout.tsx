import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const AuthLayout = async ({ children } : { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated()

    if(isUserAuthenticated) redirect('/');
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 relative">
            <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-gray-900 transition">
                <ArrowLeft size={20} />
                <span>Back</span>
            </Link>
            {children}
        </div>
    )
}

export default AuthLayout