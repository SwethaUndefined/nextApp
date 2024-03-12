
"use client"
import * as React from 'react';
import HeadersTop from '../dashboard/common/HeadersTop';
import SideMenu from '../dashboard/component/SideMenu';
import CalendarProject from '../dashboard/component/ProjectManager/CalendarProject';
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import Activity from '../dashboard/component/ProjectManager/Activity';
import HiringCandidates from '../dashboard/component/ProjectManager/HiringCandidates';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function ProjectManagerNotifications() {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const columns: GridColDef[] = [
        { field: 'dateSdata', headerName: 'Date', width: 130 },
        { field: 'timeData', headerName: 'Time', width: 130 },
        {
            field: 'sendByName',
            headerName: 'Send By',
            width: 190,
            renderCell: (params) => (
                <div className='position-relative'>
                    <img className='w-[30px] h-[30px] rounded-full' src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' />
                    <span className='ml-2 text-[#3E3E3E] text-[14px]'>{params.row.sendByName}</span>
                </div>
            ),
        },
        {
            field: 'subjectData',
            headerName: 'Subject',
            width: 360,
        },
        {
            field: 'actionsData',
            headerName: 'Actions',
            width: 70,
            align: 'right',
            renderCell: (params) => (
                <div className='position-relative'>
                    <button className='btn px-0'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    ><i className="fa fa-ellipsis-v"></i></button>

                    <Menu
                        className='dropdwontabledata'
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>More</MenuItem>
                        <MenuItem onClick={handleClose}>Remove</MenuItem>
                    </Menu>

                </div>
            ),
        },
    ];

    const rows = [
        { id: 1, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'Ravi', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 2, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'sohan', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 3, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'John', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 4, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'Kumar', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 5, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'John', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 6, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'vinay', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 7, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'John', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 8, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'John', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
        { id: 9, timeData: '08.56pm', dateSdata: '21-02-2024', sendByName: 'John', subjectData: 'Your Python Developer Job Description Is posted on the official job portal. ' },
    ];


    return (
        <section className="">
            <HeadersTop />
            {/* ... rest of your component code */}

            <div className="container-fluid my-md-5 my-4">
                <div className="row">
                    <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
                        <SideMenu />
                    </div>

                    <div className="col-lg-11 pe-lg-4 ps-lg-0">
                        <div className="row justify-content-between  align-items-center">
                            <div className="col-lg-8 projectText">
                                <h1>Notifications</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                                <button className="btn btn-light me-3 mx-lg-2">
                                    JD Assets
                                </button>
                                <button className="btn btn-blue">Create New JD</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shadow mt-4 rounded-3 p-3">

                                    <div className='d-flex justify-between'>
                                        <div>
                                            <button className='text-blue'>By Date<img className='ms-1' src="image/setByDate.png" alt="" /></button>
                                        </div>

                                        <button className='btn'>
                                        <i className="fa fa-trash  text-red-700" aria-hidden="true"></i>    
                                         </button>
                                    </div>


                                    <DataGrid
                                        className='text-[#3E3E3E] text-[14px] notificationData'
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: { page: 0, pageSize: 5 },
                                            },
                                        }}
                                        pageSizeOptions={[5, 10]}
                                        checkboxSelection
                                    />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4">
                                <div className="overflow-hidden d-flex justify-center">
                                    <CalendarProject />
                                </div>
                                <div className="mt-5">
                                    <Upcomings />
                                </div>

                                <div className="mt-5">
                                    <Activity />
                                </div>

                                <div className="mt-5">
                                    <HiringCandidates />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
