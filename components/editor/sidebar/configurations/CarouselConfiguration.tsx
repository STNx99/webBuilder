import { CarouselElement } from "@/lib/type";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { useEditorContext } from "@/lib/context";
import CarouselSwitch from "./switch/CarouselSwitch";
import CarouselNumberInput from "./inputs/CarouselNumberInput";
import CarouselTextInput from "./inputs/CarouselTextInput";

type Props = {
  selectedElement: CarouselElement;
};

const CarouselConfiguration: React.FC<Props> = ({ selectedElement }) => {
  const router = useRouter();
  const settings = selectedElement.settings || {};
  const { dispatch } = useEditorContext();

  const handleChange = (property: string, value: any) => {
    const updatedSettings = {
      ...settings,
      [property]: value,
    };


    if (typeof value === "boolean" && property === "autoplay") {
      updatedSettings.autoplay = Boolean(value);
    }

    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        id: selectedElement.id,
        updates: { settings: updatedSettings },
      },
    });

    router.refresh();
  };

  return (
    <div className="flex flex-col">
      <Accordion type="single" collapsible>
        <AccordionItem value="basic">
          <AccordionTrigger>Basic Settings</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <CarouselNumberInput
              id="slidesToShow"
              label="Slides To Show"
              value={settings.slidesToShow || 1}
              onChange={(value) => handleChange("slidesToShow", value)}
            />

            <CarouselNumberInput
              id="slidesToScroll"
              label="Slides To Scroll"
              value={settings.slidesToScroll || 1}
              onChange={(value) => handleChange("slidesToScroll", value)}
            />

            <CarouselSwitch
              id="arrows"
              label="Show Arrows"
              checked={settings.arrows !== false}
              onCheckedChange={(checked) => handleChange("arrows", checked)}
            />

            <CarouselSwitch
              id="dots"
              label="Show Dots"
              checked={settings.dots !== false}
              onCheckedChange={(checked) => handleChange("dots", checked)}
            />

            <CarouselSwitch
              id="infinite"
              label="Infinite Looping"
              checked={settings.infinite !== false}
              onCheckedChange={(checked) => handleChange("infinite", checked)}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="animation">
          <AccordionTrigger>Animation Settings</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <CarouselSwitch
              id="autoplay"
              label="Autoplay"
              checked={settings.autoplay == true}
              onCheckedChange={(checked) => handleChange("autoplay", checked)}
            />

            {settings.autoplay && (
              <CarouselNumberInput
                id="autoplaySpeed"
                label="Autoplay Speed (ms)"
                value={settings.autoplaySpeed || 3000}
                min={500}
                step={100}
                onChange={(value) => handleChange("autoplaySpeed", value)}
              />
            )}

            <CarouselNumberInput
              id="speed"
              label="Animation Speed (ms)"
              value={settings.speed || 500}
              min={100}
              step={50}
              onChange={(value) => handleChange("speed", value)}
            />

            <CarouselSwitch
              id="fade"
              label="Fade Effect"
              checked={settings.fade === true}
              onCheckedChange={(checked) => handleChange("fade", checked)}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="advanced">
          <AccordionTrigger>Advanced Settings</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <CarouselSwitch
              id="centerMode"
              label="Center Mode"
              checked={settings.centerMode === true}
              onCheckedChange={(checked) => handleChange("centerMode", checked)}
            />

            {settings.centerMode && (
              <CarouselTextInput
                id="centerPadding"
                label="Center Padding"
                value={settings.centerPadding || "50px"}
                onChange={(value) => handleChange("centerPadding", value)}
              />
            )}

            <CarouselSwitch
              id="draggable"
              label="Draggable"
              checked={settings.draggable !== false}
              onCheckedChange={(checked) => handleChange("draggable", checked)}
            />

            <CarouselSwitch
              id="swipe"
              label="Touch Swipe"
              checked={settings.swipe !== false}
              onCheckedChange={(checked) => handleChange("swipe", checked)}
            />

            <CarouselSwitch
              id="vertical"
              label="Vertical Mode"
              checked={settings.vertical === true}
              onCheckedChange={(checked) => handleChange("vertical", checked)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CarouselConfiguration;
