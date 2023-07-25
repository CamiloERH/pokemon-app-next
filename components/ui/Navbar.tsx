import NextLink from 'next/link'
import Image from 'next/image';
import { useTheme, Text, Spacer } from '@nextui-org/react'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la app"
                width={70}
                height={70}
            />
            <NextLink href={'/'}>
                <Text style={{ display: 'inline-block'}} color='white' h2>P</Text>
                <Text style={{ display: 'inline-block'}} color='white' h3>okémon</Text>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href={'/favorites'}>
                <Text color='white'>Favoritos</Text>
            </NextLink>
        </div>
    )
}