"use client"
import { auth, db } from '@/action/firebase/db';
import { Button } from '@/components/ui/button';
import { agriculturalNotes } from '@/constant/notes';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { CalendarIcon, CloudHail, MoreHorizontal, Plane, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';



import React, { useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea';
import { CalendarDemo } from '@/components/carlendar';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { PopoverTrigger, Popover, PopoverContent } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
})



interface NoteTypes {
    title: string,
    content: string,
    date: string

}

function Page() {
    const [user, setUser] = React.useState<any>(null)
    const [username, setUsername] = React.useState<string>("")
    const [agriculturalNote, setAgriculturalNote] = React.useState(agriculturalNotes)
    const [note, setNote] = React.useState<NoteTypes>({
        title: "",
        content: "",
        date: ""
    })
    const router = useRouter()


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const titleRef = React.useRef<HTMLInputElement>(null)
    const contentRef = React.useRef<HTMLTextAreaElement>(null)

    const titlePlanRef = React.useRef<HTMLInputElement>(null)
    const contentPlanRef = React.useRef<HTMLTextAreaElement>(null)


    function onSubmit(data: z.infer<typeof FormSchema>) {
        // setAgriculturalNote([...agriculturalNotes, data])
        setNote((prev: NoteTypes) => {
            return {
                ...prev,
                title: titlePlanRef.current!.value,
                content: contentPlanRef.current!.value,
                date: data.dob.getDay().toString() + "/" + data.dob.getMonth().toString() + "/" + data.dob.getFullYear().toString()
            }
        })
    }
    const addPlan = (date: Date) => {
        setNote((prev: NoteTypes) => {
            return {
                ...prev,
                title: titlePlanRef.current!.value,
                content: contentPlanRef.current!.value,
                date: date.getDay().toString() + "/" + date.getMonth().toString() + "/" + date.getFullYear().toString()
            }
        })
        if (note.title === "" || note.content === "" || note.date === "") return
        setAgriculturalNote([...agriculturalNotes, note])
        toast({ title: "Thêm ghi chú thành công", description: "Ghi chú của bạn đã được thêm thành công" })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email)
                getDocs(query(collection(db, "users"), where("email", "==", user.email))).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data())
                        setUsername(doc.data().username)
                    })
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                }
                );
            } else {
                router.push('/')
            }
        });
    }, [note])
    return (
        <main className='w-full flex flex-col gap-4'>
            <div className="grid grid-cols-2 h-[600px] gap-4">
                <div className="rounded-lg transition-all border p-4  congnong">
                    <div className="flex w-full items-center justify-between">
                        <h1 className='w-full font-semibold'> Ghi chú nông nghiệp </h1>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button ><Plus /> Tạo thêm </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Thêm ghi chú</DialogTitle>
                                    <DialogDescription>
                                        Ghi chú nông nghiệp giúp bạn ghi lại những thông tin quan trọng trong quá trình canh tác.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Tiêu đề
                                        </Label>
                                        <Input
                                            ref={titleRef}
                                            id="note_title"
                                            defaultValue="Tiêu đề"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Nôi dung
                                        </Label>
                                        <Textarea
                                            ref={contentRef}
                                            id="note_content"
                                            defaultValue="Nội dung"
                                            className="col-span-3"
                                        />

                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Thêm mới</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    {agriculturalNotes.map((note, i) => {
                        return (
                            <div className="w-full max-[200px] bg-[#ffffff] my-2 rounded-lg shadow-sm flex flex-col p-2" key={i}>
                                <h1 className='font-semibold mb-2 text-base'> {note.title} </h1>
                                <p className='text-sm text-slate-600'> {note.content}</p>
                                <div className="w-full h-[1px] border my-3"></div>
                                <div className="flex w-full items-center justify-between text-slate-600">
                                    <span className='text-sm'> {note.date} </span>
                                    <MoreHorizontal />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="rounded-lg shadow-md transition-all hover:shadow-lg border p-4 bg-[#FFFFFF] congnong flex flex-col items-center">
                    <h1 className='w-full font-semibold mb-4'> Chia sẻ với chúng tôi những dự định và kế hoạch của bạn.</h1>
                    <CalendarDemo />

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="my-4"> Lên kế hoạch </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Lên lịch trình</DialogTitle>
                                <DialogDescription>
                                    Cùng chúng tôi xây dựng một kế hoạch thông minh và thú vị cho những dự án sắp tới của bạn!
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Tiêu đề
                                    </Label>
                                    <Input
                                        ref={titlePlanRef}
                                        id="plant_title"
                                        defaultValue="Tiêu đề"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Nôi dung
                                    </Label>
                                    <Textarea
                                        ref={contentPlanRef}
                                        id="plant_content"
                                        defaultValue="Nội dung"
                                        className="col-span-3"
                                    />
                                </div>

                                <div className="grid grid-cols-4 items-center gap-4">

                                    <div className="col-span-3 col-start-2">
                                        <Form {...form}>
                                            <form className="space-y-8">
                                                <FormField
                                                    control={form.control}
                                                    name="dob"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col">
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <FormControl>
                                                                        <Button
                                                                            variant={"outline"}
                                                                            className={cn(
                                                                                "w-[240px] pl-3 text-left font-normal",
                                                                                !field.value && "text-muted-foreground"
                                                                            )}
                                                                        >
                                                                            {field.value ? (
                                                                                format(field.value, "PPP")
                                                                            ) : (
                                                                                <span> Ngày thực hiện </span>
                                                                            )}
                                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                        </Button>
                                                                    </FormControl>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0" align="start">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={field.value}
                                                                        onSelect={field.onChange}
                                                                        disabled={(date) =>
                                                                            date > new Date() || date < new Date("1900-01-01")
                                                                        }
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </form>
                                        </Form>
                                    </div>

                                </div>

                            </div>
                            <DialogFooter>
                                <Button onClick={() => {
                                    form.handleSubmit(onSubmit)()
                                    addPlan(form.getValues().dob)
                                    console.log("ok")
                                }}>Thêm mới</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <div className="w-full">
                        {agriculturalNotes.map((note, i) => {
                            return (
                                <div className="w-full max-[200px] bg-[#ffffff] my-2 rounded-lg shadow-sm flex flex-col p-2" key={i}>
                                    <h1 className='font-semibold mb-2 text-base'> {note.title} </h1>
                                    <p className='text-sm text-slate-600'> {note.content}</p>
                                    <div className="w-full h-[1px] border my-3"></div>
                                    <div className="flex w-full items-center justify-between text-slate-600">
                                        <span className='text-sm'> {note.date} </span>
                                        <MoreHorizontal />
                                    </div>
                                </div>
                            )
                        })}

                    </div>





                </div>

            </div>


        </main>
    )
}

export default Page