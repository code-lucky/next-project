'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Drawer, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Navigation One'
    }
];

const Menus: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <div className="relative">
            <button onClick={showDrawer}>
                <img src="/icons/bars_3.svg" alt="menu" width={28} height={28} />
            </button>

            <Drawer title="Menu" onClose={onClose} open={open} width="300">
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </Drawer>
        </div>
    );
};

export default Menus;
