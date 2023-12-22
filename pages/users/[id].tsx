import React from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import RootLayout from "@/app/layout";

const PostPage = ({user}) => {
    const {asPath, pathname, push} = useRouter()

    return (
        <RootLayout>
            <button onClick={() => push('/')}>Go Home</button>
            <p>Пользователь: {user.name}</p>
            <p>ID {user.name}: {user.id}</p>
            <p>Номер {user.name}: {user.phone}</p>
        </RootLayout>
    );
};

export default PostPage;

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}
    }
}