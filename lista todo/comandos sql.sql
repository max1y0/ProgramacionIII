create table usuario(
    mail varchar(60) primary key,
	contraseña varchar(60)
);
create table todo(
    id serial primary key,
    mail_user varchar(60),
    foreign key (mail_user) references usuario(mail)
);
create table item(
    id serial primary key,
    contenido varchar(60),
    borradosi_no varchar(60),
    id_todo bigint unsigned,
    foreign key (id_todo) references todo(id)
);
insert into usuario values ('sofi.lore1@gmail.com', 'sososo');
insert into usuario values ('sole.esme2@gmail.com', 'lelele');
insert into usuario values ('cande.cele3@gmail.com', 'cacaca');
insert into usuario values ('ori.sil4@gmail.com', 'ororor');
insert into todo(mail_user) values ('sofi.lore1@gmail.com');
insert into todo(mail_user) values ('sole.esme2@gmail.com');
insert into todo(mail_user) values ('cande.cele3@gmail.com');
insert into todo(mail_user) values ('ori.sil4@gmail.com');
insert into item(contenido,borradosi_no,id_todo) values ('matematica bien', 'no', 1);
insert into item(contenido,borradosi_no,id_todo) values ('lengua bien', 'si', 2);
insert into item(contenido,borradosi_no,id_todo) values ('fisica falta', 'no', 3);
insert into item(contenido,borradosi_no,id_todo) values ('matematica mal', 'si', 4);
select * from item;
