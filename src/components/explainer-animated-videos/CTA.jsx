export default function CTA({
  link = "javascript:;",
  css,
  text = "Request A Quote",
  icon = false,
}) {
  return (
    <div className="w-full"
      dangerouslySetInnerHTML={{
        __html: `
      <a
        href="${link}"
        class="relative overflow-hidden flex gap-4 items-center justify-center uppercase xl:py-[18px] md:py-[10px] py-[12px] xl:px-[28px]  md:px-[20px] px-[20px] border-solid border-[2px] border-[#d605a4] before:animate-login_blur rounded-full before:content-[''] before:absolute before:left-[-20px] before:top-0 before:w-[30px] before:h-[100px] before:mt-[-20px] before:bg-white before:opacity-60 before:filter before:blur-[30px] before:transform before:origin-top xl:text-[15px] md:text-[12px] leading-tight font-semibold bg-transparent ${css} md:w-max w-full"
      >
        <span>${text}</span>
        ${
          icon &&
          `<img src="/explainer-animated-videos/right-arrow.svg" alt="icons" width="18" height="15" />`
        }
      </a>`,
      }}
    />
  );
}
