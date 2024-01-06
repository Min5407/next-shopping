import { ICONS } from "@/assets/icon";

export const QualitySection = () => {
  const qualityData = [
    {
      Icon: ICONS.PERSON_STANDING,
      title: "Customizable",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      Icon: ICONS.FAST_FORWARD,
      title: "FAST",
      desc: " Nam beatae voluptatibus aliquid.",
    },
    {
      Icon: ICONS.SHIELD_CHECK,
      title: "Secure",
      desc: "Autem amet laboriosam eos dolorum perspiciatis culpa cum iusto. Sint dicta, illo dolorum natus est voluptatum explicabo quia.",
    },
  ];
  return (
    <ul className="flex flex-col gap-4 rounded-md bg-gray-50 p-10 md:flex-row md:items-start">
      {qualityData.map(({ Icon, desc, title }) => {
        return (
          <li
            key={title}
            className="mb-4 flex flex-1 flex-col items-center  justify-center gap-2 md:mb-0 md:gap-5"
          >
            <span className=" h-15 w-15 flex items-center justify-center rounded-full bg-green-100 p-4 text-green-900">
              <Icon className="h-15 w-15" />
            </span>
            <h3 className="text-base font-medium">{title}</h3>
            <p className="text-center text-sm text-muted-foreground">{desc}</p>
          </li>
        );
      })}
    </ul>
  );
};
