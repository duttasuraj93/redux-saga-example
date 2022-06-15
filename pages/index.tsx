import type { NextPage } from 'next'
// import { data } from '@/constants/appType/index.tsx'
import { data } from '@/constants/appType'
import { date } from '@/constants/index'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/slices/userSlice'
import Header from '@/components/Header'

const Home: NextPage = () => {


    const user = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const getUsers = async () => {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        // console.log(response);
                        // dispatch(getUser())
    }

    console.log(user);


    useEffect(() => {

        getUsers()

    }, [])



    return (
        <div>
            <Header />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias reiciendis nisi et odio eligendi dolor dicta, maxime tempore eum?
        </div>
    )
}

export default Home
