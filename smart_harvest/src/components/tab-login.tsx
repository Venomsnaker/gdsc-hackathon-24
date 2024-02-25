"use client"
import { auth, db } from "@/action/firebase/db"
import { isAuthFirebase } from "@/action/is-auth"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { redirect, useRouter } from "next/navigation"
import React, { use, useEffect } from "react"

export function TabsDemo() {

    const email_login_Ref = React.useRef<HTMLInputElement>(null)
    const password_login_Ref = React.useRef<HTMLInputElement>(null)
    const nameRef = React.useRef<HTMLInputElement>(null)
    const email_register_Ref = React.useRef<HTMLInputElement>(null)
    const password_register_Ref = React.useRef<HTMLInputElement>(null)
    const [islogin, setIslogin] = React.useState(false)

    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              router.push('/dashboard')
              console.log("tab-login.tsx: 68: ok")
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    }, [islogin, router])

    const handleLogin =async () => {
        const email = email_login_Ref.current?.value
        const password = password_login_Ref.current?.value
        console.log(email, password)
        if (!email || !password) return

        const user = await signInWithEmailAndPassword(auth, email, password)
        if (user) {
            router.push('/dashboard')
        }

       
    }


    const handleRegister = () => {
        const name = nameRef.current?.value
        const email = email_register_Ref.current?.value
        const password = password_register_Ref.current?.value

        if (!name || !email || !password) return

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        username: name,
                        email: email
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

                const user = userCredential.user;
                setIslogin(prev => !prev)
                localStorage.setItem('user', JSON.stringify(user.uid))


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });

        console.log(name, email, password)
        
        

    }

    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Đăng nhập</TabsTrigger>
                <TabsTrigger value="password">Đăng ký</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle> Chào mừng trở lại </CardTitle>
                        <CardDescription>
                            Đừng quên xem thời tiết hôm nay nhé !
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" placeholder="example@gmail.com" type="text" ref={email_login_Ref} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Mật khẩu</Label>
                            <Input id="username" placeholder="*********" type="password" ref={password_login_Ref} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => handleLogin()}>Đăng nhập</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Đăng ký</CardTitle>
                        <CardDescription>
                            Cùng chúng tôi quản lý trang trại của bạn nào !
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Họ và tên</Label>
                            <Input id="current" type="text" placeholder="Nguyễn Văn A" ref={nameRef} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="current">Email</Label>
                            <Input id="current" type="text" placeholder="example@gmail.com" ref={email_register_Ref} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">Mật khẩu</Label>
                            <Input id="new" type="password" placeholder="**********" ref={password_register_Ref} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => handleRegister()}>Đăng ký</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
