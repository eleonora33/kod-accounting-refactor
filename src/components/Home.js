import React, { useMemo, useState } from 'react';

const stats = [
  { value: '40+', label: 'години искуство' },
  { value: '120+', label: 'активни клиенти' },
  { value: '24h', label: 'брз одговор' },
  { value: '100%', label: 'доверлива поддршка' },
];

const services = [
  {
    title: 'Сметководство',
    description: 'Комплетно водење книги, месечни извештаи, плати и законски обврски.',
    icon: '01',
  },
  {
    title: 'Даночно советување',
    description: 'Практични насоки за усогласеност, оптимизација и навремено планирање.',
    icon: '02',
  },
  {
    title: 'Финансиски консалтинг',
    description: 'Анализа на трошоци, буџети, cash-flow и одлуки базирани на бројки.',
    icon: '03',
  },
  {
    title: 'Поддршка за фирми',
    description: 'Регистрации, документација, административна поддршка и континуирано водење.',
    icon: '04',
  },
];

const process = [
  'Ги разбираме вашите обврски, рокови и тековни финансиски процеси.',
  'Поставуваме јасен месечен систем за документација, извештаи и комуникација.',
  'Следиме резултати, ризици и можности за подобри финансиски одлуки.',
];

const trustItems = [
  {
    label: 'Месечен ритам',
    title: 'Јасен календар за обврски',
    text: 'Знаете што треба да се достави, кога се поднесува и што е следен чекор.',
  },
  {
    label: 'Контрола',
    title: 'Преглед на бројки без хаос',
    text: 'Кратки извештаи што покажуваат приходи, трошоци, рокови и ризици.',
  },
  {
    label: 'Поддршка',
    title: 'Совет пред да донесете одлука',
    text: 'Практична насока за даноци, трошоци, плати и финансиско планирање.',
  },
];

const whyItems = [
  {
    title: 'Брза комуникација',
    text: 'Кратки одговори, јасни насоки и навремено известување пред рокови.',
  },
  {
    title: 'Професионална дискреција',
    text: 'Финансиските податоци се третираат внимателно, организирано и доверливо.',
  },
  {
    title: 'Практични совети',
    text: 'Објаснување на бројките со јазик што помага при реални деловни одлуки.',
  },
  {
    title: 'Проактивно следење',
    text: 'Навремено следење на обврски, ризици и можности за подобра контрола.',
  },
];

const FinancialPreview = () => (
  <div className="relative mx-auto max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[2rem] border border-brandCyan/20 bg-white/10 p-4 shadow-soft lg:max-w-full">
    <div className="rounded-[1.5rem] bg-white p-5 text-brandNavy">
      <div className="flex items-center justify-between border-b border-brandNavy/10 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandCyanDeep">Месечен преглед</p>
          <p className="mt-1 text-2xl font-extrabold">Финансиски пулс</p>
        </div>
        <span className="rounded-full bg-brandGoldSoft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brandNavy">
          Април
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ['Приход', '+18%', 'bg-brandGoldSoft'],
          ['Трошоци', '-7%', 'bg-white'],
          ['Рокови', '0', 'bg-brandNavy text-white'],
        ].map(([label, value, tone]) => (
          <div key={label} className={`rounded-2xl border border-brandNavy/10 p-4 ${tone}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] opacity-70">{label}</p>
            <p className="mt-2 text-2xl font-extrabold">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-mist p-5">
        <div className="flex h-40 items-end gap-3">
          {[54, 92, 76, 118, 104, 132].map((height, index) => (
            <div key={height} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full rounded-t-xl ${index === 5 ? 'bg-brandGold' : 'bg-brandCyanDeep'}`}
                style={{ height: `${height}px` }}
              />
              <span className="text-[10px] font-bold text-graphite">W{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid gap-3 border-t border-brandCyan/10 p-4 sm:grid-cols-2">
      <div>
        <p className="text-sm font-semibold text-brandLavender">Следење</p>
        <p className="text-2xl font-extrabold text-brandGold">Навремено</p>
      </div>
      <div className="rounded-2xl bg-brandCyan p-4 text-brandNavy">
        <p className="text-sm opacity-70">Фокус</p>
        <p className="text-lg font-bold">Помалку хаос, повеќе контрола</p>
      </div>
    </div>
  </div>
);

const AboutVisual = () => (
  <div className="rounded-[2rem] bg-brandNavy p-5 text-white shadow-soft">
      <div className="rounded-[1.5rem] border border-brandGold/25 bg-white/8 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brandGold">KOD систем</p>
          <p className="mt-2 text-2xl font-extrabold">Јасна контрола</p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brandGold text-xl font-bold text-brandNavy">
          K
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {[
          ['Документи', 'Средени и проверени'],
          ['Даноци', 'Планирани пред рок'],
          ['Извештаи', 'Разбирливи бројки'],
        ].map(([title, text], index) => (
          <div key={title} className="flex items-center gap-4 rounded-2xl bg-white p-4 text-brandNavy">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brandCyan text-sm font-extrabold">
              {index + 1}
            </span>
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm text-graphite">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-brandGoldSoft p-4 text-brandNavy">
          <p className="text-3xl font-extrabold">40+</p>
          <p className="text-sm font-semibold">години искуство</p>
        </div>
        <div className="rounded-2xl border border-brandCyan/20 p-4">
          <p className="text-3xl font-extrabold text-brandCyan">24h</p>
          <p className="text-sm font-semibold text-brandLavender">брз одговор</p>
        </div>
      </div>
    </div>
  </div>
);

const ToolsSection = () => {
  const [amount, setAmount] = useState('10000');
  const [rate, setRate] = useState(18);
  const [mode, setMode] = useState('withoutVat');
  const [monthlyRevenue, setMonthlyRevenue] = useState('300000');
  const [fixedCosts, setFixedCosts] = useState('120000');
  const [variableCosts, setVariableCosts] = useState('80000');

  const formatCurrency = (value) =>
    new Intl.NumberFormat('mk-MK', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(Number.isFinite(value) ? value : 0);

  const vatResult = useMemo(() => {
    const numericAmount = Number(amount) || 0;
    const vatRate = Number(rate) / 100;

    if (mode === 'withVat') {
      const base = numericAmount / (1 + vatRate);
      const vat = numericAmount - base;
      return { base, vat, total: numericAmount };
    }

    const vat = numericAmount * vatRate;
    return { base: numericAmount, vat, total: numericAmount + vat };
  }, [amount, mode, rate]);

  const profitResult = useMemo(() => {
    const revenue = Number(monthlyRevenue) || 0;
    const fixed = Number(fixedCosts) || 0;
    const variable = Number(variableCosts) || 0;
    const totalCosts = fixed + variable;
    const profit = revenue - totalCosts;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

    if (margin >= 25) {
      return {
        revenue,
        totalCosts,
        profit,
        margin,
        title: 'Здрава маржа',
        text: 'Бизнисот има добар простор за раст, резерва и планирање на следни инвестиции.',
      };
    }

    if (margin >= 10) {
      return {
        revenue,
        totalCosts,
        profit,
        margin,
        title: 'Стабилно, но следете трошоци',
        text: 'Профитот е позитивен, но вреди редовно да се следат фиксните и варијабилните трошоци.',
      };
    }

    if (margin >= 0) {
      return {
        revenue,
        totalCosts,
        profit,
        margin,
        title: 'Ниска маржа',
        text: 'Има простор за ревизија на трошоци, цени или процеси пред да се намали ликвидноста.',
      };
    }

    return {
      revenue,
      totalCosts,
      profit,
      margin,
      title: 'Ризик од загуба',
      text: 'Трошоците се повисоки од приходите. Потребен е брз преглед на трошоци и cash-flow.',
    };
  }, [fixedCosts, monthlyRevenue, variableCosts]);

  return (
    <section id="toolsSection" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandCyanDeep">Алатки</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Брза пресметка пред да донесете одлука.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite">
            Користете ги калкулаторите како ориентација. За точна пресметка според вашиот случај, најдобро е да направиме кратка проверка.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="self-start rounded-[2rem] border border-brandNavy/10 bg-mist p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandCyanDeep">ДДВ калкулатор</p>
                <h3 className="mt-2 text-2xl font-extrabold text-ink">Основица, ДДВ и вкупно</h3>
              </div>
              <div className="flex rounded-full bg-white p-1 text-sm font-bold text-brandNavy">
                {[
                  ['withoutVat', 'Без ДДВ'],
                  ['withVat', 'Со ДДВ'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-full px-4 py-2 transition ${mode === value ? 'bg-brandNavy text-brandCyan' : 'hover:bg-brandGoldSoft'}`}
                    onClick={() => setMode(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_10rem]">
              <label className="block">
                <span className="text-sm font-semibold text-graphite">Износ</span>
                <input
                  className="mt-2 w-full rounded-2xl border border-brandNavy/10 bg-white px-4 py-4 text-lg font-bold text-brandNavy outline-none focus:border-brandCyanDeep"
                  min="0"
                  type="number"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-graphite">Стапка</span>
                <select
                  className="mt-2 w-full rounded-2xl border border-brandNavy/10 bg-white px-4 py-4 text-lg font-bold text-brandNavy outline-none focus:border-brandCyanDeep"
                  value={rate}
                  onChange={(event) => setRate(Number(event.target.value))}
                >
                  <option value={18}>18%</option>
                  <option value={10}>10%</option>
                  <option value={5}>5%</option>
                </select>
              </label>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['Основица', vatResult.base, 'bg-white'],
                ['ДДВ', vatResult.vat, 'bg-brandGoldSoft'],
                ['Вкупно', vatResult.total, 'bg-brandNavy text-white'],
              ].map(([label, value, tone]) => (
                <div key={label} className={`rounded-2xl border border-brandNavy/10 p-4 ${tone}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">{label}</p>
                  <p className="mt-2 text-2xl font-extrabold">{formatCurrency(value)}</p>
                  <p className="mt-1 text-xs opacity-70">МКД</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-graphite">
              Пресметката е информативна и не заменува даночен совет за конкретен случај.
            </p>
          </div>

          <div className="rounded-[2rem] bg-brandNavy p-5 text-white shadow-soft sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandGold">Профит калкулатор</p>
                <h3 className="mt-2 text-2xl font-extrabold">Месечна добивка и маржа</h3>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3">
                <p className="text-xs text-brandLavender">Оцена</p>
                <p className="font-bold text-brandCyan">{profitResult.title}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ['Месечен приход', monthlyRevenue, setMonthlyRevenue],
                ['Фиксни трошоци', fixedCosts, setFixedCosts],
                ['Варијабилни трошоци', variableCosts, setVariableCosts],
              ].map(([label, value, setter]) => (
                <label key={label} className="block">
                  <span className="text-sm font-semibold text-brandLavender">{label}</span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-brandCyan/15 bg-white/10 px-4 py-4 text-lg font-bold text-white outline-none placeholder:text-brandLavender focus:border-brandGold"
                    min="0"
                    type="number"
                    value={value}
                    onChange={(event) => setter(event.target.value)}
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['Трошоци', profitResult.totalCosts, 'bg-white/10 text-white'],
                ['Добивка', profitResult.profit, profitResult.profit >= 0 ? 'bg-brandGoldSoft text-brandNavy' : 'bg-white text-brandNavy'],
                ['Маржа', `${profitResult.margin.toFixed(1)}%`, 'bg-brandCyan text-brandNavy'],
              ].map(([label, value, tone]) => (
                <div key={label} className={`rounded-2xl border border-brandCyan/15 p-4 ${tone}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">{label}</p>
                  <p className="mt-2 text-2xl font-extrabold">
                    {typeof value === 'number' ? formatCurrency(value) : value}
                  </p>
                  {typeof value === 'number' && <p className="mt-1 text-xs opacity-70">МКД</p>}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-white p-5 text-brandNavy">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandCyanDeep">Финансиски сигнал</p>
              <h4 className="mt-2 text-2xl font-extrabold">{profitResult.title}</h4>
              <p className="mt-3 leading-7 text-graphite">{profitResult.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <div className="bg-white">
      <section
        id="homeSection"
        className="relative overflow-hidden bg-brandNavy text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,247,255,0.22),transparent_28%),radial-gradient(circle_at_86%_8%,rgba(168,173,200,0.22),transparent_26%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-[calc(100vw-2.5rem)] min-w-0 lg:max-w-none">
            <div className="mb-7 flex w-full max-w-[calc(100vw-2.5rem)] flex-wrap items-start gap-3 rounded-2xl border border-brandGold/30 bg-white/5 px-4 py-2 text-sm font-semibold text-brandCyan shadow-sm sm:inline-flex sm:w-auto sm:max-w-full sm:items-center sm:rounded-full">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brandGold sm:mt-0" />
              <span className="min-w-0 break-words leading-5">Сметководство, даноци и финансиска поддршка</span>
            </div>
            <h1 className="max-w-3xl break-words text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Финансиска јасност за стабилен раст на вашиот бизнис.
            </h1>
            <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-brandLavender">
              KOD Consulting им помага на компании и претприемачи да имаат точни бројки,
              навремени обврски и подобри финансиски одлуки без непотребен административен товар.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contactSection"
                className="w-full rounded-full bg-brandCyan px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-brandNavy shadow-soft transition hover:bg-brandGoldSoft sm:w-auto sm:px-7 sm:tracking-[0.14em]"
              >
                Бесплатна консултација
              </a>
              <a
                href="#servicesSection"
                className="w-full rounded-full border border-brandCyan/30 bg-white/5 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-brandCyan hover:text-brandCyan sm:w-auto sm:px-7 sm:tracking-[0.14em]"
              >
                Види услуги
              </a>
            </div>
          </div>

          <div className="relative min-w-0 overflow-hidden">
            <FinancialPreview />
          </div>
        </div>
      </section>

      <section className="border-y border-brandNavy/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-8 lg:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-mist px-5 py-6 text-center">
              <p className="text-3xl font-extrabold text-brandNavy">{item.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-graphite">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="aboutUsSection" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AboutVisual />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandCyanDeep">За нас</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Партнер кој ги претвора финансиските обврски во јасен систем.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Работиме со бизниси на кои им треба сигурност, брза комуникација и практично објаснување на бројките.
              Наместо само документи, добивате контекст, предупредувања и насоки што може веднаш да ги користите.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Јасни месечни извештаи', 'Даночна усогласеност', 'Поддршка при одлуки', 'Доверлива комуникација'].map((item) => (
                <div key={item} className="rounded-2xl border border-brandNavy/10 bg-white p-4 font-semibold text-graphite shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicesSection" className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandCyanDeep">Услуги</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Сè што ви треба за финансиски мир и контрола.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-brandNavy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-brandNavy text-sm font-extrabold text-brandGold">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-4 leading-7 text-graphite">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="processSection" className="bg-brandNavy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandCyan">Процес</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Како работиме</h2>
              <p className="mt-5 text-lg leading-8 text-brandLavender">
                Системот е едноставен, предвидлив и направен да ви заштеди време.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-5 rounded-3xl border border-brandCyan/15 bg-white/5 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brandGold font-bold text-brandNavy">
                    {index + 1}
                  </span>
                  <p className="text-lg leading-8 text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="teamSection" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandCyanDeep">Зошто KOD</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Модерен пристап за фирми што сакаат ред, брзина и доверба.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-brandNavy/10 p-6">
                  <p className="text-lg font-bold text-ink">{item.title}</p>
                  <p className="mt-3 text-graphite">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {trustItems.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-brandNavy/10 bg-mist p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brandCyanDeep">{item.label}</p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brandGold text-sm font-extrabold text-brandNavy">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 leading-7 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ToolsSection />

      <section id="contactSection" className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandCyanDeep">Контакт</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Да видиме како можеме да ви помогнеме.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              Испратете кратка порака или јавете се за прв разговор околу вашите сметководствени и финансиски потреби.
            </p>
            <div className="mt-8 space-y-3 text-graphite">
              <p><strong className="text-ink">Телефон:</strong> +389 72 111 111</p>
              <p><strong className="text-ink">Email:</strong> example@yahoo.com</p>
              <p><strong className="text-ink">Локација:</strong> Скопје, Македонија</p>
            </div>
          </div>

          <form
            className="rounded-[2rem] bg-white p-5 text-brandNavy shadow-soft sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              alert('Пораката е подготвена. Следен чекор е поврзување со EmailJS или backend.');
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-brandNavy/10 bg-mist px-4 py-4 outline-none focus:border-brandCyanDeep" placeholder="Име и презиме" required />
              <input className="rounded-2xl border border-brandNavy/10 bg-mist px-4 py-4 outline-none focus:border-brandCyanDeep" placeholder="Телефон" />
              <input className="rounded-2xl border border-brandNavy/10 bg-mist px-4 py-4 outline-none focus:border-brandCyanDeep sm:col-span-2" type="email" placeholder="Email" required />
              <textarea className="min-h-36 rounded-2xl border border-brandNavy/10 bg-mist px-4 py-4 outline-none focus:border-brandCyanDeep sm:col-span-2" placeholder="Вашата порака" required />
            </div>
            <button className="mt-5 w-full rounded-full bg-brandNavy px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-brandCyan transition hover:bg-graphite" type="submit">
              Испрати порака
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
