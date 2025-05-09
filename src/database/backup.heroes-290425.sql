PGDMP  9                    }            heroes    16.6    16.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24767    heroes    DATABASE     }   CREATE DATABASE heroes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE heroes;
                postgres    false            �            1259    24778    heroes    TABLE     �   CREATE TABLE public.heroes (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    publisher_id integer,
    photo text
);
    DROP TABLE public.heroes;
       public         heap    postgres    false            �            1259    24777    heroes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.heroes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.heroes_id_seq;
       public          postgres    false    218            �           0    0    heroes_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.heroes_id_seq OWNED BY public.heroes.id;
          public          postgres    false    217            �            1259    24769 
   publishers    TABLE     f   CREATE TABLE public.publishers (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);
    DROP TABLE public.publishers;
       public         heap    postgres    false            �            1259    24768    publishers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.publishers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.publishers_id_seq;
       public          postgres    false    216            �           0    0    publishers_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.publishers_id_seq OWNED BY public.publishers.id;
          public          postgres    false    215                        2604    24781 	   heroes id    DEFAULT     f   ALTER TABLE ONLY public.heroes ALTER COLUMN id SET DEFAULT nextval('public.heroes_id_seq'::regclass);
 8   ALTER TABLE public.heroes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218                       2604    24772    publishers id    DEFAULT     n   ALTER TABLE ONLY public.publishers ALTER COLUMN id SET DEFAULT nextval('public.publishers_id_seq'::regclass);
 <   ALTER TABLE public.publishers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    24778    heroes 
   TABLE DATA           ?   COPY public.heroes (id, name, publisher_id, photo) FROM stdin;
    public          postgres    false    218   �       �          0    24769 
   publishers 
   TABLE DATA           .   COPY public.publishers (id, name) FROM stdin;
    public          postgres    false    216   [       �           0    0    heroes_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.heroes_id_seq', 16, true);
          public          postgres    false    217            �           0    0    publishers_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.publishers_id_seq', 12, true);
          public          postgres    false    215            &           2606    24785    heroes heroes_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.heroes
    ADD CONSTRAINT heroes_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.heroes DROP CONSTRAINT heroes_pkey;
       public            postgres    false    218            "           2606    24776    publishers publishers_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.publishers
    ADD CONSTRAINT publishers_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.publishers DROP CONSTRAINT publishers_name_key;
       public            postgres    false    216            $           2606    24774    publishers publishers_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.publishers
    ADD CONSTRAINT publishers_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.publishers DROP CONSTRAINT publishers_pkey;
       public            postgres    false    216            '           2606    24786    heroes heroes_publisher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.heroes
    ADD CONSTRAINT heroes_publisher_id_fkey FOREIGN KEY (publisher_id) REFERENCES public.publishers(id) ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.heroes DROP CONSTRAINT heroes_publisher_id_fkey;
       public          postgres    false    218    4644    216            �   �   x�u��
�0F�ӧ�(���K���Zѩ ޔu��\kq��V�C��$'���&󝅮 �q�̼��7�!9[�d
Ӻ,��`T괈����f�a�o�pH�$`S�̿�`x���	L�%�u�v�8�TX��>�'��J����,(��q.E�d�8kˮ�N�?�$�֒�o�aL��-���%�o��E= "@Y�      �   H   x�3��M,*K��2�t������MI�H�t ��24@Tf�g�g�ō8�R� �8=������������ w$"     