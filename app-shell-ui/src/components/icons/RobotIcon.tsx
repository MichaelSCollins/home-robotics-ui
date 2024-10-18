export const RobotIcon = ({ fill, stroke, className, size }: { fill: string, stroke: string, className: string, size?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 64 64" width={size ?? "128"} height={size ?? "128"}>
    <rect x="18" y="8" width="28" height="20" rx="4" ry="4" fill={ fill } stroke={ stroke } stroke-width="2"/>

    <circle cx="26" cy="18" r="3" fill={ stroke }/>
    <circle cx="38" cy="18" r="3" fill={ stroke }/>

    <line x1="32" y1="2" x2="32" y2="8" stroke={ stroke } stroke-width="2"/>
    <circle cx="32" cy="2" r="2" stroke={ stroke } fill={ fill }/>

    <rect x="12" y="28" width="40" height="28" rx="6" ry="6" fill={ fill } stroke={ stroke } stroke-width="2"/>

    <line x1="6" y1="34" x2="12" y2="34" stroke={ stroke } stroke-width="4"/>
    <line x1="58" y1="34" x2="52" y2="34" stroke={ stroke } stroke-width="4"/>

    <circle cx="24" cy="42" r="3" fill={ stroke }/>
    <circle cx="32" cy="42" r="3" fill={ stroke }/>
    <circle cx="40" cy="42" r="3" fill={ stroke }/>

    <rect x="22" y="56" width="6" height="8" fill={ fill } stroke={ stroke } stroke-width="2"/>
    <rect x="36" y="56" width="6" height="8" fill={ fill } stroke={ stroke } stroke-width="2"/>
</svg>