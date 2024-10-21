"use client";
import { co2 } from "@tgwf/co2";
import { useEffect, useState } from "react";
import { Text } from '@mantine/core';
import axios from 'axios';

export const PerVisit = () => {
    const [stateFileSize, setStateFileSize] = useState(0);
    useEffect(() => {
        const fetchState = async () => {
            try {
                const response = await axios.get('/api/state');
                setStateFileSize(response.data);
            } catch (error) {
                console.error('Failed to fetch state:', error);
            }
        };
        fetchState();
    }, [])

    const swd = new co2({ model: "swd" })
    const emissions = swd.perVisit(stateFileSize, true)

    const data = [
        {
            // title: 'Total produced is ' + stateFileSize + ' bytes',
            title: 'Total emission is',
            stats: emissions,
            description: 'gCO2 per kWh',
        },
    ];

    const stats = data.map((stat) => (
        <div style={{
            display: 'flex',
            gap: '10px',
            color: 'black',
            fontSize: '1.2rem'
        }} key={stat.title}>
            <Text>{stat.title}</Text>
            <Text style={{
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }}>{stat.stats.toString()}</Text>
            <Text>{stat.description}</Text>
        </div>
    ));
    return <div>{stats}</div>;
}

export default PerVisit;