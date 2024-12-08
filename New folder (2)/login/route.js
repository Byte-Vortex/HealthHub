import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import supabase from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    console.log("Received login request:", { email });

    // Fetch the user based on email
    const { data: user, error } = await supabase
      .from("users") // Adjust schema/table as needed
      .select("id, email, password_hash, role") // Select only needed fields
      .eq("email", email)
      .single();

    if (error || !user) {
      console.error("User not found or query error:", error);
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 } // Unauthorized
      );
    }

    // Compare the provided password with the stored hashed password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 } // Unauthorized
      );
    }

    console.log("User authenticated successfully:", { id: user.id, email: user.email });

    // Respond with user details (exclude sensitive data like password_hash)
    return NextResponse.json(
      {
        message: "Login successful",
        user: { id: user.id, email: user.email, role: user.role },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error during signin:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 } // Internal Server Error
    );
  }
}
