import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { SignIn, SignInButton } from '@clerk/nextjs'
import { ShieldAlertIcon } from 'lucide-react'

const unauthenticatedView = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-background'>
      <div className='w-full max-w-lg bg-muted'>
        <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldAlertIcon size={5}/>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Unautherized Access</ItemTitle>
              <ItemDescription>
                You are not authorized to access this resource.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <SignInButton>
                <Button variant={"outline"} size={"sm"}>
                  Sign In
                </Button>
              </SignInButton>
            </ItemActions>
        </Item>
      </div>
    </div>
  )
}

export default unauthenticatedView
