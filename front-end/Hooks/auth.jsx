import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from '../Lib/axios';

export const useAuth = ({middleware} = {}) => {

     const router = useRouter()

     const [isLoading, setIsLoading] = useState(true)
     
     const { data: user, error, mutate} = useSWR("/api/me", () => 
          axios.get('/api/me')
          .then( response => response.data.data)
     )

     //CSRF
     const csrf = () => axios.get("/sanctum/csrf-cookie")

     //login form
     const Login = async ({...props}) => {

          await csrf()

          axios.post("/api/login", props).then((response) => {

                    if(response.data.status == 200) {
                         const redirect = router.query.redirect || '/'
                         router.push(redirect)
                    }
     
          }). catch(error => console.log(error) )

     }

     
     //register
     const register = async ({...props}) => {
          
          await csrf()
          
          axios.post('/api/register', props).then((response) => {

               if(response.data.status == 200) {
     
                    mutate() && router.push('/Auth/login')
               }
               
          }).catch(error => console.log(error)) 
          
     }
     
     //logout de l'utilisateur
     const logout = async () => {

          try {
               await axios.post("/api/logout")

               mutate(null, false)
               
               router.push('/Auth/login')

          } catch (error) {
               console.log(error);
          }

     }

     useEffect(() => {

          if(user || error) {
               
               setIsLoading(false);
          }
          
          if(middleware === "guest" && user) router.push("/")
          if(middleware === "auth" && !user && error) router.push(`/Auth/login?redirect=${encodeURIComponent('/Profile')}`)

     }, [user, error])

     return {
         register,
         user,
         Login,
         csrf,
         logout,
         isLoading
     };
};
