import { Spinner } from '@/components/ui/spinner'


const authLoadingView = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-background'>
      <Spinner className='size-6 text-ring' />
    </div>
  )
}

export default authLoadingView
