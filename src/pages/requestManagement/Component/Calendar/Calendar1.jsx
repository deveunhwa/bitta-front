import '../App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NavBar from "./NavBar.jsx";

const localizer = momentLocalizer(moment);

function Calendar1() {
    // 이벤트 데이터 정의
    const events = [
        {
            title: '회의',
            start: new Date(2024, 9, 29, 10, 0), // 2024년 10월 29일 오전 10시
            end: new Date(2024, 9, 29, 12, 0)    // 2024년 10월 29일 오후 12시
        },
        {
            title: '프로젝트 마감일',
            start: new Date(2024, 9, 30),
            end: new Date(2024, 9, 30)
        },
        {
            title: '촬영 진행일',
            start: new Date(2024, 9, 13),
            end: new Date(2024, 9, 20)
        },
        {
            title: '촬영 진행일',
            start: new Date(2024, 9, 13),
            end: new Date(2024, 9, 20)
        },
        {
            title: '촬영 진행일',
            start: new Date(2024, 9, 13),
            end: new Date(2024, 9, 20)
        },
    ];

    return (
        <div>
            <NavBar />
            <div style={{display: 'flex', justifyContent: 'center', width: '100vw'}}>
                <div style={{height: '70vh'}}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        defaultView="month"
                        style={{height: 600, width: 1000}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calendar1;