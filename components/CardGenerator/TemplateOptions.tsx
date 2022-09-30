import React, { useContext } from "react";
import { TemplatesContext } from "../store/templates-context";
import { useRouter } from "next/router";

const Templates = () => {
  const router = useRouter();
  const templatesCtx = useContext(TemplatesContext);

  const templates = templatesCtx;

  const selectTemplateHandler = (event: any) => {
    router.push("/card-generator/" + event.target.id);
  };

  return (
    <div className="grid px-52 gap-4 py-8">
      <h1 className="font-poppins text-4xl font-bold mt-8">
        Modal Card Generator
      </h1>
      <p className="w-[500px]">
        Measure your return on email marketing efforts easier and faster by
        using thebest online tools. Popupsmart is ready to help you build an
        efficient email list!
      </p>
      <div className="flex items-center space-x-4 mt-12">
        <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
          1
        </p>
        <h3 className="text-lg font-semibold">Choose your template</h3>
      </div>
      <div className="grid grid-cols-4 place-items-center">
        {templates.map((t) => (
          <div
            key={t.props.id}
            className="pointer-events-none grid place-content-center border-2 w-[500px] h-[450px] rounded-3xl border-custom-dark-gray bg-custom-light-gray scale-50"
          >
            <t.template templateProps={t.props} />
            <button
              id={t.props.id}
              onClick={selectTemplateHandler}
              className="grid transition-all absolute rounded-3xl text-2xl font-semibold opacity-0 hover:opacity-100 hover:bg-custom-purple hover:bg-opacity-60 pointer-events-auto w-full h-full"
            >
              <div className="px-8 py-7 bg-custom-white place-self-center text-custom-purple rounded-xl w-fit">
                Select Template
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
