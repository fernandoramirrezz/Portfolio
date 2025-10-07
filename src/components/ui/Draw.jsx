"use client";

import { useRef, useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcgbscrgrccmmjglspwq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZ2JzY3JncmNjbW1qZ2xzcHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTM5MzIsImV4cCI6MjA2MjQyOTkzMn0.1wjbKhhc5upFqT4TJx_eu-9b_7Cfko08qUKvL_iXs-U";
const supabase = createClient(supabaseUrl, supabaseKey);


export default function DrawingApp() {
    const canvasRef = useRef(null);
    const [drawings, setDrawings] = useState([]);
  
    // Fetch existing drawings
    useEffect(() => {
      fetchDrawings();
    }, []);
  
    const fetchDrawings = async () => {
      const { data, error } = await supabase.storage.from("drawings").list();
      if (error) {
        console.error("Error fetching drawings:", error);
      } else {
        setDrawings(data);
      }
    };
  
    const handleSave = async () => {
      if (!canvasRef.current) return;
  
      const dataUrl = canvasRef.current.getDataURL();
      const blob = await (await fetch(dataUrl)).blob();
  
      console.log("Blob size:", blob.size); // Debug
  
      const fileName = `drawing-${Date.now()}.png`;
  
      const { data, error } = await supabase.storage
        .from("drawings")
        .upload(fileName, blob, {
          contentType: "image/png",
          upsert: true, // optional: prevents conflict
        });
  
      console.log("Upload result:", { data, error });
  
      if (error) {
        console.error("Upload error:", error);
      } else {
        alert("Drawing saved!");
        fetchDrawings(); // refresh list
      }
    };
  
    return (
        <div className="w-[calc(100%-5rem)] mx-auto rounded-xl h-[40rem] overflow-hidden border border-[rgba(255,255,255,0.10)] p-8 bg-gray-100 dark:bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
        <h1 className="text-xl font-bold mb-4">Canvas Drawing App</h1>
  
        <CanvasDraw
          ref={canvasRef}
          brushRadius={2}
          lazyRadius={0}
          canvasWidth={600}
          canvasHeight={400}
          hideGrid
          brushColor="#000"
        />
  
        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Drawing
        </button>
  
        <h2 className="mt-6 text-lg font-semibold">Saved Drawings:</h2>
        <ul className="mt-2">
          {drawings.map((file) => (
            <li key={file.name}>
              <a
                href={`https://<YOUR_SUPABASE_PROJECT_ID>.supabase.co/storage/v1/object/public/drawings/${file.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }