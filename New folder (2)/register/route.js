import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import supabase from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Check if the user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the `users` table
    const { data: newUser, error: userInsertError } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password_hash: hashedPassword,
        },
      ])
      .select()
      .single();

    if (userInsertError) {
      return NextResponse.json(
        { error: userInsertError.message },
        { status: 500 }
      );
    }

    // Insert a corresponding entry into the `accounts` table
    // const { error: accountInsertError } = await supabase
    //   .from("accounts")
    //   .insert([
    //     {
    //       userId: newUser.id, // Use the user ID from the `users` table
    //       provider: "credentials",
    //       type:"credentials", // Set the provider as "email"
    //       providerAccountId: email, // Use the email as the provider_account_id
    //     },
    //   ]);

    // if (accountInsertError) {
    //   return NextResponse.json(
    //     { error: accountInsertError.message },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json(
      { message: "User registered successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
