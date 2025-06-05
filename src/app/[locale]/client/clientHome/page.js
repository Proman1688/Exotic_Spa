"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function home() {
    const t = useTranslations("clientHome");
    const name = "John Doe"; 

    const quickAccess = [
        { title: t('bookAppointment'), link: "/client/bookAppointment", description: t('descriptionBookAppointment'), icon: "calendar_add_on"},
        { title: t('myAppointments'), link: "/client/myAppointments", description: t('descriptionMyAppointments'), icon: "calendar_month" },
        { title: t('myProfile'), link: "/client/myProfile", description: t('descriptionMyProfile'), icon: "person" },
        { title: t('ourServices'), link: "/services", description: t('descriptionOurServices'), icon: "spa" },
        { title: t('memberships'), link: "/client/abonnements", description: t('descriptionMemberships'), icon: "star" },
        { title: t('medicalConditions'), link: "/client/clientMedicalForm", description: t('descriptionMedicalConditions'), icon: "note_add" }
    ];

    const appointments = [
        { day: "01", month: "MAY", year: "2023", startTime: "10:00 AM", endTime: "11:00 AM", service: "Massage", therapist: "John Doe" },
        { day: "08", month: "JUNE", year: "2023", startTime: "02:00 PM", endTime: "03:00 PM", service: "Facial Treatment", therapist: "Jane Smith" },
        { day: "20", month: "AUGUST", year: "2023", startTime: "01:00 PM", endTime: "02:00 PM", service: "Body Treatment", therapist: "Emily Johnson" }
    ];

    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl">{t('welcome')}</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">{t('description')}.</p>
            <h3 className="text-2xl font-bold inline-block text-start w-full mb-1 max-md:text-lg max-sm:text-center">{t('quickActions')}</h3>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 mb-10 max-md:grid-cols-2">
                {quickAccess.map((item, index) => (
                    <Link href={item.link} key={index} className="bg-white shadow-2xl p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer flex flex-col items-start">
                        <span className="material-symbols-outlined icon-filled !text-4xl block w-full text-center mb-4 text-blue-500">{item.icon}</span>
                        <h4 className="text-base font-bold text-center w-full mb-1">{item.title}</h4>
                        <p className="text-xs text-center w-full">{item.description}</p>
                    </Link>
                ))}
            </div>
            <h3 className="text-2xl font-bold inline-block text-start w-full mb-1 max-md:text-lg max-sm:text-center">{t('yourNextsAppointments')}</h3>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
            <div className="w-full mt-5">
                { appointments.length > 0 ? (
                    <ul className="list-disc pl-5 w-full">
                        {appointments.map((appointment, index) => (
                            <li key={index} className="mb-2 bg-white text-black p-3 rounded-lg flex items-center justify-between border-l-4 border-l-blue-500 hover:bg-blue-50 transition-colors shadow-xl max-sm:flex-col max-sm:gap-2">
                                <div className="flex flex-col items-center mr-4 bg-blue-500 text-white p-2 rounded-lg w-16">
                                    <p className="font-semibold text-xl">{appointment.day}</p>
                                    <p className="font-semibold text-[10px]">{appointment.month}</p>
                                </div>
                                <div className="flex-1 flex flex-col items-start gap-1">
                                    <p className="text-lg font-bold max-sm:text-center">{appointment.service}</p>
                                    <p className="text-xs flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:text-center"> <span className="material-symbols-outlined !text-xs">schedule</span> {appointment.startTime} - {appointment.endTime}</p>
                                    <p className="text-xs flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:text-center"><span className="material-symbols-outlined !text-xs">supervisor_account</span> {t('with')}: {appointment.therapist}</p>
                                </div>
                                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors cursor-pointer">{t('viewDetails')}</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>{t('noAppointments')}</p>
                )}
            </div>
        </section>
    );
}