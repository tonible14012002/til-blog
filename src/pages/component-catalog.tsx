import { Button } from '@/components/ui/button'
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { ChevronRightSquareIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'




export default function ComponentCatalog () {

  const [ radioSelect, setRadioSelect ] = useState('0')
  const [ checkboxSelect, setCheckboxSelect ] = useState(false)

    return (
    <div className='flex flex-col items-center flex-wrap gap-8 p-10'>
        <Button>
            Primary Button
        </Button>
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                Open Dropdown
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-[240px]'>
                <DropdownMenuLabel>
                Profile

                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    Hello
                </DropdownMenuItem>
                <DropdownMenuCheckboxItem checked={checkboxSelect} onCheckedChange={setCheckboxSelect}>
                Checkbox 1
                </DropdownMenuCheckboxItem>
                <DropdownMenuRadioGroup value={radioSelect} onValueChange={setRadioSelect}>
                <DropdownMenuRadioItem value='1'>
                    Radio check 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='2'>
                    Radio check 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='3'>
                    Radio check 3
                </DropdownMenuRadioItem>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Hello
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Hello
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <Accordion type="multiple" className='w-[400px]'>
            <AccordionItem value='as'>
            <AccordionTrigger>
                Hello world
            </AccordionTrigger>
            <AccordionContent className='w-full max-w-md'>
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value='2'>
            <AccordionTrigger>
                Hello world
            </AccordionTrigger>
            <AccordionContent className='w-full max-w-md'>
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value='3'>
            <AccordionTrigger>
                Hello world
            </AccordionTrigger>
            <AccordionContent className='w-full max-w-md'>
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
                Content oF
            </AccordionContent>
            </AccordionItem>
        </Accordion>

        <div>
            <Alert>
            <AlertTitle>
                This is Alert Title
            </AlertTitle>
            <AlertDescription>
                This is Alert Description
                This is Alert Description
                This is Alert Description
                This is Alert Description
            </AlertDescription>
            </Alert>
        </div>
        <div className='flex gap-4'>
            <Badge>
            <ChevronRightSquareIcon size={14}/>
            Frontend
            </Badge>
            <Badge variant="secondary">
            Backend
            </Badge>
            <Badge variant="destructive">
            Network
            </Badge>
            <Badge variant="danger">
            <ChevronRightSquareIcon size={14}/>
            Frontend
            </Badge>
            <Badge variant="warning">
            Network
            </Badge>
            <Badge variant="outline">
            Aritifical
            </Badge>
        </div>
        <Dialog>
            <DialogTrigger asChild  >
            <Button>
                Open Dialog
            </Button>
            </DialogTrigger>
            <DialogContent>
            <DialogTitle>This is a dialog</DialogTitle>
            <DialogHeader>asda</DialogHeader>
            <DialogFooter>End dialog</DialogFooter>
            </DialogContent>
        </Dialog>
        <Label>This is a label</Label>
        <Popover>
            <PopoverTrigger asChild>
            <Button variant="secondary">
                Trigger popover (secondary)
            </Button>
            </PopoverTrigger>
            <PopoverContent>
            oijeoaijoajw awidj awjd
            </PopoverContent>
        </Popover>
        <div className='w-[400px]'>
            <Input/>
        </div>
      </div>
    )
}