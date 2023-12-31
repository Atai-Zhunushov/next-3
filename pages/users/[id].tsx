import React from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import RootLayout from "@/app/layout";

interface User {
    id: number;
    name: string;
    phone: number;
}
type Params = {
    id: string; // Замените этим вашим ожидаемым типом параметра
};

const PostPage = ({ user }: { user: User })  => {
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

export async function getServerSideProps({ params }: { params: Params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}
    }
}