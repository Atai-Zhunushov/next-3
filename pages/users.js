import React from 'react';
import Link from "next/link";
import RootLayout from "../src/app/layout";


const Users = ({users}) => {
    return (
        <RootLayout>
            <div>
                <ul>
                    {users.map(user =>
                        <li key={user.id} className='no-underline'>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>

                        </li>
                    )}
                </ul>
            </div>
        </RootLayout>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users}
    }
}