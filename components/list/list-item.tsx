import TypeColorPattern, { getBgClassForType } from "@/helpers/tipe-background-helper";
import { useEffect, useRef, useState } from "react";
import pokeball from '@/icons/pokeball-icon.png';
import { getFormattedNumber } from "@/utils/string-functions";
import ActiveLink from "../active-link";

export function ListItem({ pokemon, isLast, newLimit, currentFirstItem }) {
    const [id, setId] = useState<number>();
    const [bgColor, setBgColor] = useState<TypeColorPattern>();
    const [imageSrc, setImageSrc] = useState<string>();
    const itemRef = useRef<HTMLAnchorElement>(); //Select the ListItem component with useRef

    useEffect(() => {
        if (!itemRef?.current)
            return;

        const observer = new IntersectionObserver(([entry]) => {
            if (isLast && entry.isIntersecting) {
                currentFirstItem();
                newLimit();
                observer.unobserve(entry.target);
            }
        });

        observer.observe(itemRef.current);
    }, [isLast]);

    useEffect(() => {
        setId(pokemon.id);
        setBgColor(getBgClassForType(pokemon.types[0].type.name));
        setImageSrc(pokemon.sprites.other.home.frontDefault ?? pokemon.sprites.other.officialArtwork.frontDefault); // newest generations doesn't have the 3d sprite like older ones
    }, []);

    return (
        <ActiveLink href={`/details?id=${pokemon.id}`} className="flex w-1/3 h-64 px-2 py-3 cursor-pointer" componentRef={itemRef}>
            <div className="flex flex-col w-full h-full rounded-lg mr-4 shadow-xl hover:border-4" style={{
                backgroundImage: `url(${pokeball.src}), ${bgColor?.solidBackGroundColor}`,
                backgroundSize: '30%, cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom -70% right 5%, center'
            }}>
                <div className="flex px-8 h-full">
                    <div className="flex flex-row pt-8 w-1/2">
                        <div className="flex flex-col w-full">
                            <div className="flex">
                                <h3 className="font-bold text-white text-2xl capitalize">{pokemon.name}</h3>
                            </div>
                            <div className="flex flex-col">
                                {
                                    pokemon.types.map((type) => {
                                        return <div key={type.slot} className="flex w-1/2 rounded-full mt-2" style={{ background: bgColor?.typePill }}>
                                            <span className="flex w-full font-bold capitalize text-white justify-center text-lg px-4 py-2">{type.type.name}</span>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pt-2 w-1/2 h-full" style={{
                        backgroundImage: `url(${imageSrc})`,
                        backgroundSize: '65%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top 50% right 0'
                    }}>
                        <div className="flex flex-col flex-wrap w-full">
                            <div className="flex flex-col pt-2">
                                <h3 className="font-bold text-xl text-white text-end">{getFormattedNumber(id ?? 0)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ActiveLink>
    )
}