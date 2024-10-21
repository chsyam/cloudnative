"use client";

import { hosting } from "@tgwf/co2";
import { useMemo, useState } from "react";
import { Text } from '@mantine/core';

export const Host = () => {
    const [co2, setCo2] = useState('')
    useMemo(async () => setCo2(
        await myAsynFunction('localhost')), [co2]);

    const data = [
        {
            title: 'Is our host green?',
            stats: co2,
            description: '',
        },
    ];

    const stats = data.map((stat) => (
        <div style={{
            gap:'20px',
            color:'black',
        }} key={stat.title}>
            <Text style={{
                fontSize: '2rem'
            }}>{stat.title}</Text>
            <Text style={{
                textTransform: 'uppercase',
                fontSize:'1.2rem',
                fontWeight:'bolder'
            }}>{stat.stats.toString()}</Text>
            <Text>{stat.description}</Text>
        </div>
    ));

    return <div>{stats}</div>;
}

const myAsynFunction = async (domain) => {
    return hosting.check(domain);
}

export default Host;