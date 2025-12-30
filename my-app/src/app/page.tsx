"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/* --- ДАННЫЕ ---------------------------------------------------------------- */

const houses = [
  {
    id: 1,
    name: "Дом с бассейном",
    image: "https://i.ibb.co/GvdCnJzL/IMG-4559.jpg",
    guests: "до 10 гостей",
    price: "40 000 ₽ / ночь",
    tags: ["Дом", "Бассейн", "Ночёвка", "Праздники"],
    description:
      "Дом с бассейном для комфортного отдыха и мероприятий с ночёвкой. Подходит для семейных праздников и закрытых компаний.",
    features: [
      "Бассейн на территории",
      "Ночёвка включена",
      "Зона отдыха",
      "Закрытая территория",
    ],
    photos: [
      "https://i.ibb.co/HTVqzgkQ/IMG-4560.jpg",
      "https://i.ibb.co/Xfds1MQP/IMG-1621.jpg",
      "https://i.ibb.co/j9nKtXKL/IMG-4571.jpg",
      "https://i.ibb.co/GfQ7Xkrw/IMG-4570.jpg",
      "https://i.ibb.co/Kx7026zv/IMG-4552.jpg",
      "https://i.ibb.co/DDdMVbD5/IMG-1625.jpg",
      "https://i.ibb.co/fzW40JN9/IMG-1630.jpg",
      "https://i.ibb.co/N2D7syLh/IMG-4582.jpg",
      "https://i.ibb.co/CKZ2zq83/IMG-4574.jpg",
      "https://i.ibb.co/gZngqv1K/IMG-1629.jpg",
      "https://i.ibb.co/j9nKtXKL/IMG-4571.jpg",
      "https://i.ibb.co/Jj32k9mP/IMG-4555.jpg",
      "https://i.ibb.co/Kx7026zv/IMG-4552.jpg",
      "https://i.ibb.co/1YLW57hC/IMG-4548.jpg",

    ],
  },
  {
    id: 2,
    name: "Дом на 3 спальни с кухней",
    image: "https://i.ibb.co/BHCF8fxz/IMG-4564.jpg",
    guests: "до 10 гостей",
    price: "20 000 ₽ / сутки",
    tags: ["Дом", "3 спальни", "Кухня", "Семейный отдых"],
    description:
      "Уютный дом с тремя спальнями и полноценной кухней. Подходит для проживания, отдыха и спокойных мероприятий.",
    features: ["3 отдельные спальни", "Кухня с техникой", "Гостиная зона", "Суточная аренда"],
    photos: [
      "https://i.ibb.co/5X2PrckK/IMG-4639.jpg",
      "https://i.ibb.co/zhYNs8s9/IMG-4636.jpg",
      "https://i.ibb.co/SXq0wXkZ/IMG-4589.jpg",
      "https://i.ibb.co/C5ZWBJBC/IMG-4636.jpg",
      "https://i.ibb.co/ZpCrQ3Nw/IMG-4637.jpg",

    ],
  },
  {
    id: 3,
    name: "VIP-комната над баней",
    image: "https://i.ibb.co/rRDg8LcD/IMG-4619.jpg",
    guests: "до 4 гостей",
    price: "15 000 ₽ / сутки",
    tags: ["VIP", "Ночёвка", "Над баней"],
    description:
      "Отдельная VIP-комната над баней для уединённого отдыха или ночёвки после мероприятий.",
    features: ["Отдельный вход", "Ночёвка", "Уютная атмосфера"],
    photos: [
      "https://i.ibb.co/fdy21xpZ/IMG-4621.jpg",
      "https://i.ibb.co/DD0ZZTyY/IMG-4625.jpg",
      "https://i.ibb.co/jCzKN3s/IMG-4624.jpg",
      "https://i.ibb.co/FLFnNTcy/IMG-4623.jpg",
    ],
  },
  {
    id: 4,
    name: "Баня (основная)",
    image: "https://i.ibb.co/20cNz2r6/IMG-4604.jpg",
    guests: "до 8 человек",
    price: "10 000 ₽ / час",
    tags: ["Баня", "10 человек", "Почасовая аренда"],
    description:
      "Классическая баня для компании до 8 человек. Отлично подходит для отдыха и праздников.",
    features: ["До 8 человек", "Почасовая аренда", "Зона отдыха"],
    photos: [
      "https://i.ibb.co/gb1gr49X/IMG-4609.jpg",
      "https://i.ibb.co/qY8JhDqp/IMG-4633.jpg",
      "https://i.ibb.co/1J0LnX70/IMG-4629.jpg",
      "https://i.ibb.co/NgR37XCN/IMG-4631.jpg",
      "https://i.ibb.co/4RCLsBTg/IMG-1645.jpg",
      "https://i.ibb.co/5WmXd1YB/IMG-4627.jpg",
      "https://i.ibb.co/d098HsrG/IMG-4628.jpg",
      "https://i.ibb.co/5XSCyt1t/IMG-4626.jpg",
      "https://i.ibb.co/PZHb4fkN/IMG-4615.jpg",
      "https://i.ibb.co/Jjv5FK9d/IMG-1663.jpg",
    ],
  },
  {
    id: 6,
    name: "Беседка",
    image: "https://storage.vigbo.tech/p/s2500/gallery-photo/f19da8f4-319e-4e12-899c-7696a19ba749/1e350ad2-c517-4e48-8bd5-58bb57294761/original/edwCnfYffV6O_OIjv4ZI1.JPG",
    guests: "до 10 человек",
    price: "10 000 ₽ / компания",
    tags: ["Беседка", "Компания до 10 человек"],
    description: "Беседка для отдыха и мероприятий на свежем воздухе.",
    features: ["До 10 человек", "Отдельная зона", "Подходит для застолий"],
    photos: [
      "https://i.ibb.co/yn9KXTC0/IMG-1656.jpg",
      "https://i.ibb.co/2H3Xg5t/IMG-1659.jpg",
      "https://i.ibb.co/hxr4vgQP/IMG-1633.jpg",
      "https://i.ibb.co/q3VgqPRd/IMG-1634.jpg",
      "https://i.ibb.co/Df97Mn94/IMG-1655.jpg",
      "https://storage.vigbo.tech/p/s2500/gallery-photo/f19da8f4-319e-4e12-899c-7696a19ba749/1e350ad2-c517-4e48-8bd5-58bb57294761/original/DDWx-u0p2UD9fah_JSXra.JPG",

      
    ],
  },
];

type House = (typeof houses)[number];

const gallery = [
  { id: 1, title: "Территория и вход", image: "https://i.ibb.co/TDRdQR9J/IMG-4592.jpg" },
  { id: 2, title: "Основная зона", image: "https://storage.vigbo.tech/p/s2500/gallery-photo/f19da8f4-319e-4e12-899c-7696a19ba749/1e350ad2-c517-4e48-8bd5-58bb57294761/original/6gDF7BZKpYl0EOC-BYjQ2.JPG" },
  { id: 3, title: "Зона отдыха", image: "https://i.ibb.co/tprM1k5B/IMG-1622.jpg" },
  { id: 4, title: "Зона для фото и отдыха", image: "https://i.ibb.co/1kDBpCd/IMG-4600.jpg" },
  { id: 5, title: "Кинотеатр на улице", image: "https://storage.vigbo.tech/p/s2500/gallery-photo/f19da8f4-319e-4e12-899c-7696a19ba749/1e350ad2-c517-4e48-8bd5-58bb57294761/original/YjsFBdgAdK20NnHtpqr1h.JPG" }
];

/* --- АНИМАЦИИ ---------------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

/* --- WHATSAPP --------------------------------------------------------------- */
export const WHATSAPP_PHONE = "79990000000";

/* --- ЯНДЕКС КАРТА ----------------------------------------------------------- */
// Замените эти координаты на реальные координаты вашей локации!
const COORDINATES = {
  lon: 37.617698, // Долгота (замените на вашу)
  lat: 55.755864   // Широта (замените на вашу)
};

// Ссылка для виджета Яндекс.Карт с меткой
const YANDEX_WIDGET_SRC = `https://yandex.ru/map-widget/v1/?ll=${COORDINATES.lon},${COORDINATES.lat}&z=15&pt=${COORDINATES.lon},${COORDINATES.lat},pm2rdm`;

// Ссылка для открытия полной карты
const YANDEX_FULL_MAP_URL = `https://yandex.ru/maps/?pt=${COORDINATES.lon},${COORDINATES.lat}&z=15&l=map`;

/* --- КОМПОНЕНТ -------------------------------------------------------------- */

const WeddingHousesLanding: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = React.useState("");
  const [filterEventType] = React.useState("Свадьба, день рождения");
  const [filterGuests] = React.useState("до 100 человек");
  const [filterDates] = React.useState("12 — 14 июля");

  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const [openHouse, setOpenHouse] = React.useState<House | null>(null);

  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectHouse = (houseName: string) => {
    setSelectedHouse(houseName);
    scrollToForm();
    setOpenHouse(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || "";
    const contact = (formData.get("contact") as string) || "";
    const eventType = (formData.get("eventType") as string) || "";
    const details = (formData.get("details") as string) || "";
    const house = (formData.get("house") as string) || selectedHouse;

    const message = `Здравствуйте! Хочу забронировать${
      house ? `: ${house}` : ""
    }.
Имя: ${name}
Контакты: ${contact}
Формат события (в форме): ${eventType}
Тип события (в фильтре): ${filterEventType}
Количество гостей: ${filterGuests}
Даты: ${filterDates}
Дополнительные детали: ${details}`.trim();

    const url = "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* ШАПКА */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-400/40">
              <span className="text-xl font-semibold text-emerald-400">w</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Демиденкина поляна</p>
              <p className="text-xs text-slate-400">дом, баня и территория под мероприятия</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <button
              type="button"
              onClick={scrollToProjects}
              className="hover:text-emerald-400 transition-colors"
            >
              Проекты
            </button>
            <a href="#why" className="hover:text-emerald-400 transition-colors">
              Почему мы
            </a>
            <a href="#how" className="hover:text-emerald-400 transition-colors">
              Как проходит аренда
            </a>
            <a href="#contacts" className="hover:text-emerald-400 transition-colors">
              Контакты
            </a>
          </nav>

          <button
            type="button"
            onClick={scrollToForm}
            className="rounded-full border border-emerald-500/80 bg-emerald-500/90 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            Выбрать вариант
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
          <div className="absolute inset-0 opacity-60">
            <div className="relative h-full w-full">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full w-full"
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://storage.vigbo.tech/p/s2500/gallery-photo/f19da8f4-319e-4e12-899c-7696a19ba749/1e350ad2-c517-4e48-8bd5-58bb57294761/original/6gDF7BZKpYl0EOC-BYjQ2.JPG)",
                  }}
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 space-y-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Демиденкина поляна · частная локация
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-4xl lg:text-5xl">
                Дом, баня и территория под ваши мероприятия
              </h1>
              <p className="mt-3 text-sm text-slate-200 md:text-base">
                Закрытая территория под вашу компанию: дом, баня, беседка и зона отдыха.
                Без посторонних гостей — только вы и ваш сценарий.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  Оставить заявку
                </button>
                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/10"
                >
                  Посмотреть варианты
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: "Пакетами или по отдельности",
                  text: "Можно взять дом, баню, VIP-комнату или беседку отдельно — либо собрать пакет под событие.",
                },
                {
                  title: "Закрытая территория",
                  text: "Только ваша компания. Комфортно и спокойно — без случайных гостей.",
                },
                {
                  title: "Быстрое бронирование",
                  text: "Согласуем детали, зафиксируем дату и отправим вам всё в WhatsApp.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
                >
                  <h3 className="mb-2 text-base font-semibold text-slate-50">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ПРОЕКТЫ */}
        <section id="projects" className="border-t border-white/5 bg-slate-950 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-6 max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Варианты
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                Выберите формат
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Дома, баня, VIP-комната и беседка — можно миксовать под ваш сценарий.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {houses.map((house) => (
                <motion.article
                  key={house.id}
                  variants={fadeInUp}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img src={house.image} alt={house.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-slate-50">{house.name}</h3>
                      <p className="text-xs text-slate-400">Вместимость: {house.guests}</p>
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-emerald-200/90">
                        {house.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="text-[11px] text-slate-400">Стоимость</span>
                        <span className="text-sm font-semibold text-slate-50">{house.price}</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setOpenHouse(house)}
                          className="rounded-full border border-white/30 px-3 py-1.5 text-[11px] font-semibold text-slate-100 hover:bg-white/10"
                        >
                          Подробнее
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSelectHouse(house.name)}
                          className="rounded-full border border-emerald-400/80 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20"
                        >
                          Выбрать
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ГАЛЕРЕЯ */}
        <section id="gallery" className="border-t border-white/5 bg-slate-950 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-6 max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Галерея
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                Фото с территории
              </h2>
              <p className="mt-2 text-sm text-slate-300">Нажмите на фото, чтобы открыть просмотр.</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {gallery.map((item, index) => (
                <motion.figure
                  key={item.id}
                  variants={fadeInUp}
                  onClick={() => setLightboxIndex(index)}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 cursor-pointer"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <figcaption className="px-3 py-2 text-xs font-medium text-slate-100">
                    {item.title}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ЛАЙТБОКС-КАРУСЕЛЬ ДЛЯ ГАЛЕРЕИ */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <GalleryLightbox
              images={gallery}
              index={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onChange={setLightboxIndex}
            />
          )}
        </AnimatePresence>

        {/* МОДАЛКА С ПАРАМЕТРАМИ ДОМА */}
        <AnimatePresence>
          {openHouse && (
            <HouseDetailsModal
              house={openHouse}
              onClose={() => setOpenHouse(null)}
              onSelect={handleSelectHouse}
            />
          )}
        </AnimatePresence>

        {/* Контакты + форма + карта */}
        <section
          id="contacts"
          className="border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-950 pb-10 pt-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="max-w-lg"
            >
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Расскажите о событии — подберём формат
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Напишите нам или оставьте заявку. Мы уточним детали и быстро зафиксируем бронь.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  Оставить заявку
                </button>
                <button
                  type="button"
                  onClick={() => window.open("https://t.me/yourusername", "_blank")}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100"
                >
                  Написать в Telegram
                </button>
              </div>

              <div className="mt-4 text-xs text-slate-400">
                <p>Телефон: +7 (993) 368-04-68</p>
                <p className="mt-1">Показы площадки: ежедневно с 10:00 до 21:00</p>
              </div>
            </motion.div>

            <motion.form
              id="booking-form"
              onSubmit={handleSubmit}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-50 shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
            >
              <p className="mb-4 text-sm font-semibold text-slate-50">Краткая заявка</p>

              <div className="flex flex-col gap-3">
                <input type="hidden" name="house" value={selectedHouse} />

                <label className="text-xs text-slate-300">
                  Имя
                  <input
                    type="text"
                    name="name"
                    placeholder="Как к вам обращаться"
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/80"
                  />
                </label>

                <label className="text-xs text-slate-300">
                  Контакты
                  <input
                    type="text"
                    name="contact"
                    placeholder="Телефон или @username"
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/80"
                  />
                </label>

                <label className="text-xs text-slate-300">
                  Формат события
                  <input
                    type="text"
                    name="eventType"
                    placeholder="День рождения, баня, ночёвка, беседка..."
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/80"
                  />
                </label>

                <label className="text-xs text-slate-300">
                  Даты и детали
                  <textarea
                    rows={3}
                    name="details"
                    placeholder="Например: 2 января, 8 человек, баня + дом, нужна беседка"
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/80"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  Отправить в WhatsApp
                </button>

                <p className="mt-1 text-[11px] text-slate-500">
                  Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </div>
            </motion.form>
          </div>

          {/* ЯНДЕКС КАРТА СНИЗУ */}
          <div className="mx-auto mt-10 max-w-6xl px-4">
            <YandexMapEmbed />
          </div>

          <footer className="mt-10 border-t border-white/10 pt-5">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 pb-4 text-xs text-slate-500 md:flex-row">
              <p>© {new Date().getFullYear()} Демиденкина поляна. Все права защищены.</p>
              <p>Сайт-презентация площадки под мероприятия.</p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default WeddingHousesLanding;

/* --- Яндекс Карта ----------------------------------------------------------- */

function YandexMapEmbed() {
  const handleOpenFullMap = () => {
    window.open(YANDEX_FULL_MAP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
      <div className="relative w-full aspect-[16/10]">
        <iframe
          src={YANDEX_WIDGET_SRC}
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="Карта с расположением Демиденкина поляна"
        />
      </div>
      <div className="px-4 py-3 text-xs text-slate-300 flex justify-between items-center">
        <span>Мы на карте — жми, чтобы построить маршрут</span>
        <button
          onClick={handleOpenFullMap}
          className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-medium"
        >
          Открыть в Яндекс.Картах →
        </button>
      </div>
    </div>
  );
}

/* --- Лайтбокс для галереи --------------------------------------------------- */

type GalleryItem = { id: number; title: string; image: string };

function GalleryLightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: GalleryItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const active = images[index];

  const handlePrev = () => onChange((index - 1 + images.length) % images.length);
  const handleNext = () => onChange((index + 1) % images.length);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-slate-100 hover:bg-black/70"
        >
          Закрыть
        </button>

        <div className="relative mb-3 flex-1">
          <div className="relative h-[50vh] w-full overflow-hidden rounded-2xl bg-slate-900">
            <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-black/60 px-3 py-2 text-xs text-slate-50">
            {active.title}
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-xs text-slate-50 shadow-lg hover:bg-black"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-xs text-slate-50 shadow-lg hover:bg-black"
          >
            →
          </button>
        </div>

        <div className="mt-1 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => onChange(i)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                i === index
                  ? "border-emerald-400 shadow-md"
                  : "border-white/15 hover:border-emerald-300/80"
              }`}
            >
              <img src={img.image} alt={img.title} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* --- Модалка с инфой о доме ------------------------------------------------- */

function HouseDetailsModal({
  house,
  onClose,
  onSelect,
}: {
  house: House;
  onClose: () => void;
  onSelect: (houseName: string) => void;
}) {
  const photos =
    (house as any).photos && (house as any).photos.length > 0 ? (house as any).photos : [house.image];

  const [photoIndex, setPhotoIndex] = React.useState(0);

  React.useEffect(() => {
    setPhotoIndex(0);
  }, [house.id]);

  const activePhoto = photos[photoIndex];

  const handlePrev = () => setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const handleNext = () => setPhotoIndex((prev) => (prev + 1) % photos.length);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative mx-4 w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-slate-100 hover:bg-black/70"
        >
          Закрыть
        </button>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="md:w-1/2">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-900 md:h-72">
              <img src={activePhoto} alt={house.name} className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-2.5 py-1.5 text-xs text-slate-50 shadow-lg hover:bg-black"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-2.5 py-1.5 text-xs text-slate-50 shadow-lg hover:bg-black"
              >
                →
              </button>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {photos.map((photo: string, idx: number) => (
                <button
                  key={photo + idx}
                  type="button"
                  onClick={() => setPhotoIndex(idx)}
                  className={`h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                    idx === photoIndex
                      ? "border-emerald-400 shadow-md"
                      : "border-white/15 hover:border-emerald-300/80"
                  }`}
                >
                  <img src={photo} alt={house.name} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">{house.name}</h3>

            <div className="flex flex-wrap gap-1.5 text-[11px] text-emerald-200/90">
              {house.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-slate-300">
              <div>
                <p className="text-slate-500">Вместимость</p>
                <p className="font-medium text-slate-50">{house.guests}</p>
              </div>
              <div>
                <p className="text-slate-500">Стоимость</p>
                <p className="font-medium text-emerald-300">{house.price}</p>
              </div>
            </div>

            {house.description && <p className="text-sm text-slate-300">{house.description}</p>}

            {house.features && (
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                {house.features.map((f: string) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onSelect(house.name)}
                className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Выбрать
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}