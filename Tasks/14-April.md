# Task
## Implement Zod validation 
### **1.Create Account**
 1. Account Name - Done
    - Min Length = 2
    - Max Length = 30
    - Allowed Characters = Letters, numbers, _, - 
    - Space allowed = No
    - Special Characters allowed = _,-
    - Special Character position =  Anywhere
    - Editable =  yes
    - Validation Rules & Notes = Unique must not conflict with existing accounts.
 2. Company Name - Done
    - Min Length = 2
    - Max Length = 30
    - Allowed Characters = Letters, numbers, &, .
    - Space allowed = In between
    - Special Characters allowed = &, .
    - Special Character position =  Anywhere
    - Editable =  yes
    - Validation Rules & Notes = No leading or trailing space
 3. Billing Address - Done
     - Min Length = 5
     - Max Length = 100
     - Allowed Characters = Letters, numbers, ,, - 
     - Space allowed = In between
     - Special Characters allowed = -, ,
     - Special Character position =  Anywhere
     - Editable =  yes
     - No leading or trailing special chars
 4. City 
     - Min Length = 2
     - Max Length = 30
     - Allowed Characters = Letters, -, ' 
     - Space allowed = In between
     - Special Characters allowed = -,'
     - Special Character position =  First & In-between 
     - Editable =  yes
     - Must be a valid city name
 5. Zip Code
     - Min Length = 5
     - Max Length = 10
     - Allowed Characters =  numbers, letters (if needed) 
     - Space allowed = No
     - Special Characters allowed = none
     - Special Character position =  nowhere
     - Editable =  yes
     - Validate against country specific format
 6. Phone Number
     - Min Length = 10
     - Max Length = 15
     - Allowed Characters = Numbers, +
     - Space allowed = No
     - Special Characters allowed = + only
     - Special Character position =  First only
     - Editable =  yes
     - Must be a valid phone format
### Profile Page
 1. First Name
     - Min Length = 2
     - Max Length = 20
     - Allowed Characters = Letters, -, '
     - Space allowed = No
     - Special Characters allowed = -, '
     - Special Character position =  First and In-between
     - Editable =  yes
     - No numbers , no special characters except - and '
 2. Last Name
     - Min Length = 2
     - Max Length = 20
     - Allowed Characters = Letters, -, '
     - Space allowed = No
     - Special Characters allowed = -, '
     - Special Character position =  First and In-between
     - Editable =  yes
     - No numbers , no special characters except - and '
 3. Current Password
     - Min Length = 8
     - Max Length = 32
     - Allowed Characters = Letters, numbers and special chars
     - Space allowed = Anywhere
     - Special Characters allowed = All (!@#$%^&*)
     - Special Character position =  Anywhere
     - Editable =  yes
     - Must have uppercase, lowercase, number, and special char
 4. New Password
     - Min Length = 8
     - Max Length = 32
     - Allowed Characters = Letters, numbers and special chars
     - Space allowed = Anywhere
     - Special Characters allowed = All (!@#$%^&*)
     - Special Character position =  Anywhere
     - Editable =  yes
     - Must have uppercase, lowercase, number, and special char
 5. Confirm New Password 
     - Min Length = 8
     - Max Length = 32
     - Allowed Characters = Letters, numbers and special chars
     - Space allowed = Anywhere
     - Special Characters allowed = All (!@#$%^&*)
     - Special Character position =  Anywhere
     - Editable =  yes
     - Must have uppercase, lowercase, number, and special char
```tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCheckoutStore } from "./checkout-context";
import { PhoneInput } from "../ui/phone-input";
import { CompanyTypeComboBox, CountriesCombobox } from "./combo-box";
import { accountService } from "@/services";

export const checkAccountNameExists = async (accountName: string, accountId?: string) => {
  const response = await accountService.getOrgAccountList();
  const existingAccounts = response.data
    .filter((account) => account.subscription.account.id !== accountId)
    .map((account) => account.subscription.account.name);
  return existingAccounts.includes(accountName);
};

const countryZipFormats: Record<string, RegExp> = {
  USA: /^[0-9]{5}(-[0-9]{4})?$/,
  CAN: /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/,
  UK: /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/,
  IND: /^\d{6}$/,
  AUS: /^\d{4}$/,
  GER: /^\d{5}$/,
  FRA: /^\d{5}$/,
  BRA: /^\d{5}-\d{3}$/,
  JPN: /^\d{3}-\d{4}$/,
  RUS: /^\d{6}$/,
  ITA: /^\d{5}$/,
  ESP: /^\d{5}$/,
  MEX: /^\d{5}$/,
  CHN: /^\d{6}$/,
  NLD: /^\d{4} ?[A-Za-z]{2}$/,
};

const accountOrgSchema = z.object({
  accountName: z
    .string()
    .min(2, { message: "Account name must be at least 2 characters" })
    .max(30, { message: "Account name must be at most 30 characters" })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: "Account name can only contain letters, numbers, '_', and '-'. No spaces allowed.",
    })
    .refine(async (name) => !(await checkAccountNameExists(name)), {
      message: "Account name is already taken. Please choose another.",
    }),

  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" })
    .max(30, { message: "Company name must be at most 30 characters" })
    .regex(/^[a-zA-Z0-9&. ]+$/, {
      message: "Company name can only contain letters, numbers, '&', '.', and spaces (no leading or trailing).",
    })
    .refine((name) => name.trim() === name, {
      message: "Company name must not have leading or trailing spaces.",
    }),

  billingAddress: z
    .string()
    .min(5, { message: "Billing address must be at least 5 characters" })
    .max(100, { message: "Billing address must be at most 100 characters" })
    .regex(/^[a-zA-Z0-9,. ]+$/, {
      message: "Billing address can only contain letters, numbers, ',', '.', and spaces.",
    })
    .refine((address) => !/^[,.]/.test(address) && !/[,.]$/.test(address), {
      message: "Billing address must not have leading or trailing special characters (',' or '.')",
    })
    .refine((address) => address.trim() === address, {
      message: "Billing address must not have leading or trailing spaces.",
    }),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters" })
    .max(30, { message: "City must be at most 30 characters" })
    .regex(/^[A-Za-z'\- ]+$/, {
      message: "City can only contain letters, apostrophes ('), hyphens (-), and spaces.",
    })
    .refine((val) => !val.endsWith("-") && !val.endsWith("'"), {
      message: "City must not end with a special character (' or -).",
    })
    .refine((val) => !val.startsWith(" "), {
      message: "City must not start with a space.",
    })
    .refine((val) => !val.endsWith(" "), {
      message: "City must not end with a space.",
    }),

  country: z.string().min(2, { message: "Please select a country" }),

  zipCode: z
    .string()
    .min(5, { message: "ZIP code must be at least 5 characters long" })
    .max(10, { message: "ZIP code must be at most 10 characters long" })
    .regex(/^[A-Za-z0-9]+$/, { message: "ZIP code can only contain letters and numbers." }),

  companyType: z.string().min(2, { message: "Please select a company type" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long." })
    .max(15, { message: "Phone number must be at most 15 digits long." })
    .regex(/^\+?[0-9]+$/, {
      message: "Phone number can only contain numbers and an optional leading '+'. No spaces or special characters allowed.",
    })
    .refine((phone) => {
      if (phone.startsWith("+")) {
        return phone.length >= 11 && phone.length <= 16;
      }
      return phone.length >= 10 && phone.length <= 15;
    }, {
      message: "If the phone number starts with '+', it must be between 11 and 16 characters long.",
    }),
}).refine((data) => {
  if (data.country in countryZipFormats) {
    return countryZipFormats[data.country].test(data.zipCode);
  }
  return true;
}, {
  message: "Invalid ZIP code format for the selected country.",
  path: ["zipCode"],
});

export const AccountOrgForm = () => {
  const { store, dispatch } = useCheckoutStore();
  const form = useForm<z.infer<typeof accountOrgSchema>>({
    resolver: zodResolver(accountOrgSchema),
    defaultValues: store.account,
  });
  const { reset } = form;
  const onSubmit = (values: z.infer<typeof accountOrgSchema>) => {
    dispatch({ type: "SET_ACCOUNT", payload: values });
    dispatch({ type: "SET_STEP", payload: 1 });
  };

  useEffect(() => {
    reset(store.account);
  }, [reset, store.account]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4 items-center">
          <FormField name="accountName" control={form.control} render={({ field }) => (
            <FormItem className="relative min-h-[50px]">
              <FormLabel>Account Name</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage className="absolute left-0 text-red-500 text-sm" />
            </FormItem>
          )} />

          <FormField name="companyName" control={form.control} render={({ field }) => (
            <FormItem className="relative min-h-[50px]">
              <FormLabel>Company Name</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage className="absolute left-0 text-red-500 text-sm" />
            </FormItem>
          )} />
        </div>

        <FormField name="billingAddress" control={form.control} render={({ field }) => (
          <FormItem className="relative min-h-[50px]">
            <FormLabel>Billing Address</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage className="absolute left-0 text-red-500 text-sm" />
          </FormItem>
        )} />

        <FormField name="city" control={form.control} render={({ field }) => (
          <FormItem className="relative min-h-[50px]">
            <FormLabel>City</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage className="absolute left-0 text-red-500 text-sm" />
          </FormItem>
        )} />

        <div className="grid grid-cols-2 gap-4 items-center">
          <FormField name="country" control={form.control} render={({ field }) => (
            <FormItem className="relative min-h-[50px]">
              <FormLabel>Country</FormLabel>
              <FormControl><CountriesCombobox {...field} /></FormControl>
              <FormMessage className="absolute left-0 text-red-500 text-sm" />
            </FormItem>
          )} />

          <FormField name="zipCode" control={form.control} render={({ field }) => (
            <FormItem className="relative min-h-[50px]">
              <FormLabel>ZIP Code</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage className="absolute left-0 text-red-500 text-sm" />
            </FormItem>
          )} />
        </div>

        <FormField name="companyType" control={form.control} render={({ field }) => (
          <FormItem className="relative min-h-[50px]">
            <FormLabel>Company Type</FormLabel>
            <FormControl><CompanyTypeComboBox {...field} /></FormControl>
            <FormMessage className="absolute left-0 text-red-500 text-sm" />
          </FormItem>
        )} />

        <FormField name="phone" control={form.control} render={({ field }) => (
          <FormItem className="relative min-h-[50px]">
            <FormLabel>Phone</FormLabel>
            <FormControl><PhoneInput {...field} /></FormControl>
            <FormMessage className="absolute left-0 text-red-500 text-sm" />
          </FormItem>
        )} />

        <Button type="submit" className="mt-4">Continue</Button>
      </form>
    </Form>
  );
};

```